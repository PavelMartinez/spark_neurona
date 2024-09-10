'use client';

import React, { useState } from 'react'
import { LogoInstagramFilled, LogoPinterest, LogoTelegram, LogoX, SendIcon } from '../svg';
import { Input } from '../ui/primitives';
import { IconCopy, IconShare, IconShare2 } from '../ui/icons';
import { Dropdown, MenuProps, message } from 'antd';
import {Link} from '@/i18n/routing';import { useTranslations } from 'next-intl';
;

interface ReferalInputProps {
    id: string;
}


const ReferalInput = ({ id }: ReferalInputProps) => {
    const referal: string = `${process.env.NEXT_PUBLIC_URL}/referal/${id}`;
    const [messageApi, contextHolder] = message.useMessage();
    const t = useTranslations();

    const items: MenuProps['items'] = [
    {
        key: '1',
        label: (
            <Link target="_blank" rel="noopener noreferrer" href={`https://pinterest.com/pin/create/button/?url=${encodeURIComponent(referal)}`} className='referal__input-link'>
                <span className="referal__input-link__icon">
                    <LogoPinterest />
                </span>
                <span className="referal__input-link__title">
                    Pinterest
                </span>
            </Link>
        ),
    },
    {
        key: '2',
        label: (
            <Link target="_blank" rel="noopener noreferrer" href={`https://x.com/intent/tweet?url=${encodeURIComponent(referal)}`} className='referal__input-link'>
                <span className="referal__input-link__icon">
                    <LogoX />
                </span>
                <span className="referal__input-link__title">
                    Twitter (X)
                </span>
            </Link>
        ),
    },
    {
        key: '3',
        label: (
            <Link target="_blank" rel="noopener noreferrer" href={`https://t.me/share/url?url=${encodeURIComponent(referal)}`} className='referal__input-link'>
                <span className="referal__input-link__icon">
                    <LogoTelegram />
                </span>
                <span className="referal__input-link__title">
                    Telegram
                </span>
            </Link>
        ),
    },
    {
        key: '4',
        label: (
            <Link target="_blank" rel="noopener noreferrer" href={`https://www.instagram.com/?url=${encodeURIComponent(referal)}`} className='referal__input-link'>
                <span className="referal__input-link__icon">
                    <LogoInstagramFilled />
                </span>
                <span className="referal__input-link__title">
                    Instagram
                </span>
            </Link>
        ),
    },
    ];
    
    const copyToClipboard = async () => {
        await navigator.clipboard.writeText(referal);
        messageApi.open({
            type: 'success',
            content: 'Copied to clipboard!',
        });
    }

    const handleClickInput = (e: React.MouseEvent<HTMLInputElement>) => {
        e.currentTarget.select();
        copyToClipboard();
    }

    const handleClickButton = () => {
        copyToClipboard();
    }

    return (
        <div className="referal__input-wrapper">
            <div className="referal__input-group">
                <Input className="referal__input" value={referal} readOnly onClick={handleClickInput} />
                <button className="referal__input-button" onClick={handleClickButton}>
                    <IconCopy size='24' />
                </button>
            </div>
            <Dropdown menu={{ items }} placement="top" arrow={{ pointAtCenter: true }} overlayClassName='referal__input-dropdown'>
                <button className="referal__input-button">
                    <IconShare2 size='24' />
                </button>
            </Dropdown>
            {contextHolder}
        </div>
    )
}

export default ReferalInput