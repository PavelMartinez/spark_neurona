"use server";

import { z } from "zod";
import { revalidatePath } from 'next/cache';
import { message } from 'antd';
import { dbConnect } from '@/database/db';
import { Ticket } from '@/database/models/Ticket';

export async function createQuestion(
  prevState: {
    message: string;
  },
  formData: FormData,
) {
  const schema = z.object({
    name: z.string().min(1),
    email: z.string().email(),
    text: z.string()
  });
  const parse = schema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    text: formData.get("text"),
  });


  if (!parse.success) {
    return { message: "Failed to send message: parsing" };
  }

  const data = parse.data;

  try {
    await dbConnect();
    const ticket = new Ticket({
        name: data.name,
        email: data.email,
        text: data.text
    })
    await ticket.save();

    revalidatePath("/support");
    return { message: `success` };
  } catch (e) {
    return { message: "Failed to send message" };
  }
}