import { dbConnect } from "@/database/db";
import { User } from "@/database/models/User";
import { currentUser } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

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
        try {
            const rootDir = process.cwd();

            const data = await fs.readFile(path.join(rootDir, "public", "styles_spark", body.fileName));
            const dataBase64 = Buffer.from(data).toString('base64');

            const response = await fetch(`${process.env.API_AI}/gen/generateFreeRealPhoto`, {
                method: "POST",
                body: JSON.stringify({
                    prompt: body.promt,
                    width: Math.round(body.width),
                    height: Math.round(body.height),
                    image: dataBase64
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const blob = await response.blob();
            const text = await blob.arrayBuffer();
            return new Response(text, { 
                headers: {
                    "Content-Type": "text/plain"
                }
            });
        } catch(e) {
            console.error(e)
            return NextResponse.json({ error: {
                message: "Error while requesting AI",
                error: e
            } }, { status: 500 })
        }
    }

    return NextResponse.json({ error: {
        message: "No user in database"
    } }, { status: 405 })
}