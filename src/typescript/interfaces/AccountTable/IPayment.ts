import { PaymentComment } from "@/typescript/enums/AccountTable/PaymentComment";
import { PaymentDone } from "@/typescript/enums/AccountTable/PaymentDone";

export default interface IPayment {
	key?: string;
	value: number;
	coins: number;
	status: PaymentDone;
	comment: string;
	createdAt: string;
	_id: any;
}