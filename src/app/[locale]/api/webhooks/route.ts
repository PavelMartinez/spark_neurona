import { Webhook } from 'svix'
import { headers } from 'next/headers'
import { WebhookEvent } from '@clerk/nextjs/server'
import { User } from '@/database/models/User'
import { dbConnect } from '@/database/db'
import createRandomString from '@/utils/createRandomString'

export async function POST(req: Request) {
    await dbConnect();
    const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET

    if (!WEBHOOK_SECRET) {
        throw new Error('Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local')
    }

    // Get the headers
    const headerPayload = headers()
    const svix_id = headerPayload.get('svix-id')
    const svix_timestamp = headerPayload.get('svix-timestamp')
    const svix_signature = headerPayload.get('svix-signature')

    // If there are no headers, error out
    if (!svix_id || !svix_timestamp || !svix_signature) {
        return new Response('Error occured -- no svix headers', {
            status: 400,
        })
    }

    // Get the body
    const payload = await req.json()
    const body = JSON.stringify(payload)

    // Create a new Svix instance with your secret.
    const wh = new Webhook(WEBHOOK_SECRET)

    let evt: WebhookEvent

    // Verify the payload with the headers
    try {
        evt = wh.verify(body, {
            'svix-id': svix_id,
            'svix-timestamp': svix_timestamp,
            'svix-signature': svix_signature,
        }) as WebhookEvent
    } catch (err) {
        console.error('Error verifying webhook:', err)
        return new Response('Error occured', {
            status: 400,
        })
    }

    // Do something with the payload
    // For this guide, you simply log the payload to the console
    const { id } = evt.data
    const eventType = evt.type
    console.log(`Webhook with and ID of ${id} and type of ${eventType}`)
    console.log('Webhook body:', payload)

    const userId = eventType.startsWith("session") ? payload.data.user_id : payload.data.id;
    const findUser = await User.findOne({ externalId: userId })

    if(!findUser)
    {
        const newUser = new User;
        newUser.externalId = userId;
        newUser.referalString = createRandomString(12);
        
        if(payload.data?.unsafeMetadata?.referal)
        {
            const referalUser = await User.findOne({
                referalString: payload.data?.unsafeMetadata?.referal
            })
            if(referalUser)
            {
                referalUser.referals.create({
                    email: payload.data.email_addresses[0].emailAddress,
                    value: 15
                })
                referalUser.dollars += 15
                await referalUser.save()
            }
        }
        await newUser.save();
    }
    // else if(eventType === "session.created") {
    //     await updateClerkUser(findUser);
    // }

    return new Response('', { status: 200 })
}