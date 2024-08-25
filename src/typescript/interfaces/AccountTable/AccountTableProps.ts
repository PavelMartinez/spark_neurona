import IPayment from "./IPayment";
import IReferal from "./IReferal";

export default interface AccountTableProps {
    data: IPayment[] | IReferal[],
    type: "payment" | "referal"
}