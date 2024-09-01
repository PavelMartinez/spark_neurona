import { dbConnect } from "@/database/db";
import User from "@/database/models/User";
import { currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    await dbConnect();

    const user = await currentUser()

    if (!user) {
      return new Response('Unauthorized', { status: 402 })
    }

    const thisUser = await User.findOne({ externalId: user.id }).populate('payments');
    if(thisUser) {
        return NextResponse.json({ payments: thisUser.payments }, { status: 200 })
    }

    return new Response('No such user', { status: 403 })
}