'use client';

import React, { useState } from 'react'
import { SendIcon } from '../svg';
import { Input } from '../ui/primitives';
import { IconCopy, IconShare, IconShare2 } from '../ui/icons';

interface ReferalInputProps {
    id: string;
}

const ReferalInput = ({ id }: ReferalInputProps) => {
    const [referal, setReferal] = useState<string>(`https://localhost:3000/r/${id}`);

    const handleClick = (e: React.MouseEvent<HTMLInputElement>) => {
        e.currentTarget.select();
    }
    return (
        <div className="referal__input-wrapper">
            <div className="referal__input-group">
                <Input className="referal__input" value={referal} readOnly onClick={handleClick}/>
                <button className="referal__input-button">
                    <IconCopy size='24' />
                </button>
            </div>
            <button className="referal__input-button">
                <IconShare2 size='24' />
            </button>
        </div>
    )
}

export default ReferalInput