import { PaymentDone } from "@/typescript/enums/AccountTable/PaymentDone";
import IPayment from "@/typescript/interfaces/AccountTable/IPayment";
import { IconArrowRight } from "../ui/icons";
import Link from "next/link";
import { PaymentComment } from "@/typescript/enums/AccountTable/PaymentComment";

const paymentColumns = [
    {
      title: 'Payment',
      align: 'center' as const,
      dataIndex: 'payment',
      key: 'payment',
      render: (_: any, { payment, done }: IPayment) => (
        <div className={`account-table__render-payment ${done === PaymentDone.NOT_PAYED ? "account-table__render-payment--disabled" : ""}`}>{payment}$</div>
      )
    },
    {
      title: 'Coins',
      align: 'center' as const,
      dataIndex: 'coins',
      key: 'coins',
      render: (_: any, { coins, done }: IPayment) => (
        <div className={`account-table__render-coins ${done === PaymentDone.NOT_PAYED ? "account-table__render-coins--disabled" : ""}`}>{coins > 0 ? "+" + coins : coins}</div>
      )
    },
    {
      title: 'Done',
      align: 'center' as const,
      dataIndex: 'done',
      key: 'done',
      render: (_: any, { done }: IPayment) => (
        <div className={`account-table__render-done ${done === PaymentDone.NOT_PAYED ? "account-table__render-done--danger" : ""}`}>{done}</div>
      )
    },
    {
      title: 'Comment',
      dataIndex: 'comment',
      key: 'comment',
      render: (_: any, { comment, done }: IPayment) => (
        <>
            {done === PaymentDone.NOT_PAYED ? 
                <Link href="/account/pay/aasd">
                    <button className="account-table__render-button">
                        <div className="account-table__render-button__text">
                            PAY
                        </div>
                        <div className="account-table__render-button__icon">
                            <IconArrowRight />
                        </div>
                    </button>
                </Link> :
                (comment === PaymentComment.EMPTY ? "..." : 
                    <div className={`account-table__render-comment`}>{comment}</div>
                )
            }
        </>
      )
    },
    {
      title: 'Date',
      align: 'center' as const,
      dataIndex: 'date',
      key: 'date'
    },
];

export default paymentColumns;