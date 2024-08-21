import { PaymentComment } from "@/typescript/enums/AccountTable/PaymentComment";
import { PaymentDone } from "@/typescript/enums/AccountTable/PaymentDone";

export default interface IPayment {
	key: string;
	payment: number;
	coins: number;
	done: PaymentDone;
	comment: PaymentComment;
	date: string;
}