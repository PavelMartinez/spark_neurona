import IPayment from "./IPayment";
import IReferal from "./IReferal";

export default interface IUser {
    externalId: string;
    coins: number;
    dollars: number;
    referalString: string;
    payments: [IPayment];
    referals: [IReferal];
}