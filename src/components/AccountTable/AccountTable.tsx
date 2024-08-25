'use client';

import AccountTableProps from '@/typescript/interfaces/AccountTable/AccountTableProps';
import { Table } from 'antd';
import React from 'react'
import { IconArrowLeft, IconArrowRight } from '../ui/icons';
import paymentColumns from './paymentColumns';
import IPayment from '@/typescript/interfaces/AccountTable/IPayment';
import referalsColumns from './referalsColumns';
import IReferal from '@/typescript/interfaces/AccountTable/IReferal';


const AccountTable = ({ data, type }: AccountTableProps ) => {
    return (
        <>
        {type === "payment" &&
            <Table
                rowClassName={"account-table__render"}
                columns={paymentColumns}
                dataSource={data as IPayment[]}
                pagination={
                    {
                        pageSize: 7,
                        rootClassName: "account-table__pagination",
                        position: ["bottomCenter"],
                        size: "default",
                        itemRender: (page, type, originalElement) => {
                            console.log(type)
                            if (type === "prev") {
                                return <span className='account-table__pagination-arrow'>
                                    <IconArrowLeft size='20'/>
                                </span>;
                            }
                            if (type === "next") {
                                return <span className='account-table__pagination-arrow'>
                                    <IconArrowRight size='20'/>
                                </span>;
                            }
                            if (type === "page") {
                                return <span className='account-table__pagination-page'>
                                    {page}
                                </span>;
                            }
                            return originalElement;
                        }
                    }
                } 
                className='account-table'
            />
        }
        {type === "referal" &&
            <Table
                rowClassName={"account-table__render"}
                columns={referalsColumns}
                dataSource={data as IReferal[]}
                pagination={
                    {
                        pageSize: 7,
                        rootClassName: "account-table__pagination",
                        position: ["bottomCenter"],
                        size: "default",
                        itemRender: (page, type, originalElement) => {
                            console.log(type)
                            if (type === "prev") {
                                return <span className='account-table__pagination-arrow'>
                                    <IconArrowLeft size='20'/>
                                </span>;
                            }
                            if (type === "next") {
                                return <span className='account-table__pagination-arrow'>
                                    <IconArrowRight size='20'/>
                                </span>;
                            }
                            if (type === "page") {
                                return <span className='account-table__pagination-page'>
                                    {page}
                                </span>;
                            }
                            return originalElement;
                        }
                    }
                } 
                className='account-table'
            />
        }
        </>
    )
}

export default AccountTable