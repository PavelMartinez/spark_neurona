import IPayment from "./IPayment";

export default interface AccountTableProps {
    data: IPayment[],
    type: "payment"
}