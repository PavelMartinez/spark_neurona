import { PaymentDone } from "@/typescript/enums/AccountTable/PaymentDone";
import IPayment from "@/typescript/interfaces/AccountTable/IPayment";
import { IconArrowRight } from "../ui/icons";
import Link from "next/link";
import { format } from 'date-fns';
import { PaymentComment } from "@/typescript/enums/AccountTable/PaymentComment";

const paymentColumns = [
    {
      title: 'Payment',
      align: 'center' as const,
      dataIndex: 'value',
      key: 'value',
      render: (_: any, { value, status }: IPayment) => (
        <div className={`account-table__render-payment ${status === PaymentDone.NOT_PAYED ? "account-table__render-payment--disabled" : ""}`}>{value}$</div>
      )
    },
    {
      title: 'Coins',
      align: 'center' as const,
      dataIndex: 'coins',
      key: 'coins',
      render: (_: any, { coins, status }: IPayment) => (
        <div className={`account-table__render-coins ${status === PaymentDone.NOT_PAYED ? "account-table__render-coins--disabled" : ""}`}>{coins > 0 ? "+" + coins : coins}</div>
      )
    },
    {
      title: 'Done',
      align: 'center' as const,
      dataIndex: 'status',
      key: 'status',
      render: (_: any, { status }: IPayment) => (
        <div className={`account-table__render-done ${status === PaymentDone.NOT_PAYED ? "account-table__render-done--danger" : ""}`}>
          {status === PaymentDone.NOT_PAYED ? "Not payed" : "Confirmed"}
        </div>
      )
    },
    {
      title: 'Comment',
      dataIndex: 'comment',
      key: 'comment',
      render: (_: any, { comment, status }: IPayment) => (
        <>
            {status === PaymentDone.NOT_PAYED ? 
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
      key: 'createdAt',
      render: (_: any, { createdAt }: IPayment) => (
        <time>{format(createdAt, 'dd.MM.yyyy')}</time>
      )
    },
];

export default paymentColumns;