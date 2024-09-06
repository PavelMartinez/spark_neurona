import { dbConnect } from "@/database/db";
import { User } from "@/database/models/User";
import { currentUser } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    await dbConnect();
    const user = await currentUser()

    const body = await req.json();
    console.log(body)
    if (!user) {
        return NextResponse.json({ error: {
            message: "Unauthorized"
        } }, { status: 401 })
    }

    const dbUser = await User.findOne({
        externalId: user.id
    });
    if(dbUser)
    {
        // if(dbUser.coins < 1)
        // {
        //     return NextResponse.json({ error: {
        //         message: "No balance"
        //     } }, { status: 403 })
        // }
        
        const data = await fetch(`${process.env.API_AI}/gen/animePicture`, {
            method: "POST",
            body: JSON.stringify({
                prompt: body.promt,
                width: body.width,
                height: body.height,
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const blob = await data.blob();
        const text = await blob.arrayBuffer();
        return new Response(text, { 
            headers: {
                "Content-Type": "text/plain"
            }
        });
    }

    return NextResponse.json({ error: {
        message: "No user in database"
    } }, { status: 405 })
}