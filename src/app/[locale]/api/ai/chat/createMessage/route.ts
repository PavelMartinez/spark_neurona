import { NextRequest, NextResponse } from "next/server"
import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

export async function POST(req: NextRequest, res: NextResponse) {
  const data = await req.json();
  const apiKey = process.env.OPENAI_API_KEY
  const url = 'https://api.openai.com/v1/chat/completions'

  const body = JSON.stringify({
    messages: data.messages,
    model: 'gpt-3.5-turbo',
    stream: false
  })

  try {
    const completion = await openai.chat.completions.create({
        messages: data.messages,
        model: "gpt-4o-mini",
    });
    return NextResponse.json({ data: completion.choices[0] }, { status: 200 })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}