import paymentHistory from "@/data/AccountTable/paymentsData";
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
        // const newPayments = paymentHistory.map((item) => {
        //     thisUser.payments.push({
        //         value: item.payment,
        //         coins: item.coins,
        //         status: item.done,
        //         comment: item.comment
        //     });
        // })
        // console.log(newPayments);
        // await thisUser.save()
        return NextResponse.json({ status: "done" }, { status: 200 })
    }

    return new Response('No such user', { status: 403 })
}