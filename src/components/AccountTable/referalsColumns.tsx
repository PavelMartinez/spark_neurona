import { PaymentDone } from "@/typescript/enums/AccountTable/PaymentDone";
import IPayment from "@/typescript/interfaces/AccountTable/IPayment";
import { IconArrowRight } from "../ui/icons";
import Link from "next/link";
import { PaymentComment } from "@/typescript/enums/AccountTable/PaymentComment";
import IReferal from "@/typescript/interfaces/AccountTable/IReferal";

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
        title: "Monthly income",
        align: 'center' as const,
        dataIndex: "monthly",
        key: "monthly",
        render: (_: any, { monthly }: IReferal) => (
            <div className={`account-table__render-payment`}>{monthly}$</div>
        )
    },
    {
        title: "Income for the week",
        align: 'center' as const,
        dataIndex: "weekly",
        key: "weekly",
        render: (_: any, { weekly }: IReferal) => (
            <div className={`account-table__render-payment`}>{weekly}$</div>
        )
    },
    {
        title: "Total income",
        align: 'center' as const,
        dataIndex: "total",
        key: "total",
        render: (_: any, { total }: IReferal) => (
            <div className={`account-table__render-payment`}>{total}$</div>
        )
    },
    {
        title: "Your percent",
        align: 'center' as const,
        dataIndex: "percent",
        key: "percent",
        render: (_: any, { percent }: IReferal) => (
            <div className={`account-table__render-coins`}>+{percent}</div>
        )
    }
];

export default referalsColumns;