import IReferal from "@/typescript/interfaces/Models/IReferal";
import { format } from "date-fns";

const referalsColumns = [
    {
        title: "Email",
        dataIndex: "email",
        key: "email",
        render: (_: any, { email }: IReferal) => (
            <div className={`account-table__render-payment`}>{email}</div>
        )
    },
    {
        title: "Income",
        align: 'center' as const,
        dataIndex: "value",
        key: "value",
        render: (_: any, { value }: IReferal) => (
            <div className={`account-table__render-payment`}>{value}$</div>
        )
    },
    {
        title: 'Date',
        align: 'center' as const,
        key: 'createdAt',
        render: (_: any, { createdAt }: IReferal) => (
            <time>{format(createdAt, 'dd.MM.yyyy')}</time>
        )
    },
];

export default referalsColumns;