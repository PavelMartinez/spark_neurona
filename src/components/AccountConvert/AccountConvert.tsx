'use client';

import React, { useState } from 'react'
import { DiamondGreyIcon, DiamondIcon, DollarGreyIcon, DollarIcon, MinusIcon, PlusIcon } from '../svg';
import { Button } from '../ui/primitives';

interface AccountConvertProps {
    balance?: number;
    lose?: number;
}

const AccountConvert = ({ balance = 150, lose } : AccountConvertProps) => {
    const [coins, setCoins] = useState<number>(balance);

    const handleUpdateCoins = (value: 1 | -1) => {
        let newCoins = coins + value;

        if(newCoins <= balance && newCoins >= 0)
        {
            setCoins(newCoins)
        }
    }

    return (
        <div className="account-convert">
            <div className="account-convert__heading">
                Convert your referal earnings
            </div>
            <div className="account-convert__balance">
                <div className="account-convert__balance-text">
                    ${balance}
                </div>
                {lose && 
                    <div className="account-convert__balance-badge">
                        -{Math.abs(lose)}$
                    </div>
                }
            </div>
            <div className="account-convert__counter">
                <div className="account-convert__counter-content">
                    <div className="account-convert__counter-icon">
                        <DiamondIcon />
                    </div>
                    <div className="account-convert__counter-balance">
                        <div className="account-convert__counter-balance__key">
                            Coins
                        </div>
                        <div className="account-convert__counter-balance__value">
                            {coins}
                        </div>
                    </div>
                </div>
                <div className="account-convert__counter-actions">
                    <button className="account-convert__counter-button" onClick={() => handleUpdateCoins(-1)}>
                        <MinusIcon />
                    </button>
                    <button className="account-convert__counter-button"
                    onClick={() => handleUpdateCoins(1)}>
                        <PlusIcon />
                    </button>
                </div>
            </div>
            <div className="account-convert__course">
                <span className="account-convert__course-text">
                    Course exchange:
                </span>
                <span className="account-convert__course-equation">
                    <span className="account-convert__course-number">
                        1
                    </span>
                    <span className="account-convert__course-icon">
                        <DiamondGreyIcon />
                    </span>
                    <span className="account-convert__course-symbol">
                        =
                    </span>
                    <span className="account-convert__course-number">
                        1
                    </span>
                    <span className="account-convert__course-icon">
                        <DollarGreyIcon />
                    </span>
                </span>
            </div>
            <div className="account-convert__button-wrapper">
                <Button className="account-convert__button" isDisabled={coins === 0}>
                    Convert to coins
                </Button>
            </div>
            <div className="account-convert__withdraw-wrapper">
                <button className="account-convert__withdraw">
                    OR WITHDRAW FUNDS TO THE ACCOUNT
                </button>
            </div>
        </div>
    )
}

export default AccountConvert