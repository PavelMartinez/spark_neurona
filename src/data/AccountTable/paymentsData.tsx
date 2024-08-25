import { PaymentComment } from "@/typescript/enums/AccountTable/PaymentComment";
import { PaymentDone } from "@/typescript/enums/AccountTable/PaymentDone";
import IPayment from "@/typescript/interfaces/AccountTable/IPayment";

const paymentHistory: IPayment[] = [
    {
        key: '1',
        payment: 150,
        coins: 640,
        done: PaymentDone.NOT_PAYED,
        comment: PaymentComment.EMPTY,
        date: "25.11.2023"
    },
    {
        key: '2',
        payment: 38,
        coins: 150,
        done: PaymentDone.CONFIRMED,
        comment: PaymentComment.REFERAL,
        date: "25.11.2023"
    },
    {
        key: '3',
        payment: 150,
        coins: 150,
        done: PaymentDone.CONFIRMED,
        comment: PaymentComment.EMPTY,
        date: "25.11.2023"
    },
    {
        key: '4',
        payment: 150,
        coins: 640,
        done: PaymentDone.CONFIRMED,
        comment: PaymentComment.REFERAL,
        date: "25.11.2023"
    },
    {
        key: '5',
        payment: 38,
        coins: 150,
        done: PaymentDone.CONFIRMED,
        comment: PaymentComment.REFERAL,
        date: "25.11.2023"
    },
    {
        key: '6',
        payment: 150,
        coins: 150,
        done: PaymentDone.CONFIRMED,
        comment: PaymentComment.EMPTY,
        date: "25.11.2023"
    },
    {
        key: '7',
        payment: 38,
        coins: 64,
        done: PaymentDone.CONFIRMED,
        comment: PaymentComment.EMPTY,
        date: "25.11.2023"
    },
    {
        key: '8',
        payment: 150,
        coins: 32,
        done: PaymentDone.CONFIRMED,
        comment: PaymentComment.EMPTY,
        date: "25.11.2023"
    },
    {
        key: '9',
        payment: 38,
        coins: 32,
        done: PaymentDone.CONFIRMED,
        comment: PaymentComment.EMPTY,
        date: "25.11.2023"
    },
    {
        key: '10',
        payment: 150,
        coins: 32,
        done: PaymentDone.CONFIRMED,
        comment: PaymentComment.EMPTY,
        date: "25.11.2023"
    },
];

export default paymentHistory;