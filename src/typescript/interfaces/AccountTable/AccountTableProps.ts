import IPayment from "../Models/IPayment";
import IReferal from "../Models/IReferal";

export default interface AccountTableProps {
    data: IPayment[] | IReferal[],
    type: "payment" | "referal"
}