import AccountTable from '@/components/AccountTable/AccountTable';
import { BigDiamondIcon, DialogIcon, DiamondIcon, EmojiRocket, Group2Icon, SendIcon, StarIcon, WalletMoneyIcon } from '@/components/svg'
import { Flex, FlexItem, Section } from '@/components/ui/layout'
import Link from 'next/link'
import React from 'react'

import ReferalsData from '@/data/AccountTable/referalsData'
import AccountConvert from '@/components/AccountConvert/AccountConvert';
import Image from 'next/image';

import AppleLogo from '../../../../../public/AppleLogo.png'
import AndroidLogo from '../../../../../public/AndroidLogo.png'
import { Breadcrumb } from 'antd';
import ReferalInput from '@/components/ReferalInput/ReferalInput';

const ReferalPage = async () => {
    return (
		<Section className='referal'>
            <Flex container>
                <div className="referal__text">
                    <div className="breadcrump">
                        <Breadcrumb items={[{ title: 'Dashboard', href: "/account" }, { title: 'Referal program'}]} className='breadcrump__component'/>
                    </div>
                    <div className="referal__heading">
                        <h3 className='referal__heading-h3'>REFERAL PROGRAM</h3>
                        <div className="referal__heading-description">
                            Invite your friends and earn money
                        </div>
                    </div>
                </div>
            </Flex>
			<Flex
				container
				className='referal__inner'
				direction='row'
				wrap
			>
				<FlexItem className='referal__column'>
					<div className="referal__section referal-how">
                        <div className="referal-how__list-wrapper">
                            <h4 className="referal-how__heading">
                                <span className="referal-how__heading-text">
                                    How it works
                                </span>
                                <span className="referal-how__heading-icon">
                                    <EmojiRocket />
                                </span>
                            </h4>
                            <ol className="referal-how__list">
                                <li className="referal-how__list-item">
                                    Copy the invitation link and send it to your friends
                                </li>
                                <li className="referal-how__list-item">
                                    Your friends must register an account and pay the fare
                                </li>
                                <li className="referal-how__list-item">
                                    Get 25% of their recharges for as long as you use the site
                                </li>
                                <li className="referal-how__list-item">
                                    Withdraw from 30 USD!
                                </li>
                            </ol>
                        </div>
                        <div className="referal-how__link">
                            <div className="referal-how__link-subheading">
                                Your invitation link:
                            </div>
                            <ReferalInput id="adsadasdsadsadassd" />
                        </div>
					</div>
					<div className="referal__section">
						<div className="referal__section-heading referal__section-heading--big">
							YOUR REFERALS
						</div>
						<div className="referal__section-content">
							<AccountTable type='referal' data={ReferalsData}/>
						</div>
					</div>
				</FlexItem>
				<FlexItem className='referal__column'>
					<AccountConvert />
					<div className="referal-stats">
                        <div className="referal-stats__main">
                            <div className="referal-stats__content">
                                <div className="referal-stats__heading">
                                    Your average referal income:
                                </div>
                                <div className="referal-stats__value">
                                    $150
                                </div>
                            </div>
                        </div>
                        <div className="referal-stats__dict">
                            <div className="referal-stats__dict-item">
                                <div className="referal-stats__dict-key">
                                    Referals count:
                                </div>
                                <div className="referal-stats__dict-value">
                                    2 pers.
                                </div>
                            </div>
                            <div className="referal-stats__dict-item">
                                <div className="referal-stats__dict-key">
                                    Total income:
                                </div>
                                <div className="referal-stats__dict-value">
                                    150$
                                </div>
                            </div>
                            <div className="referal-stats__dict-item">
                                <div className="referal-stats__dict-key">
                                    Monthly income
                                </div>
                                <div className="referal-stats__dict-value">
                                    150$
                                </div>
                            </div>
                            <div className="referal-stats__dict-item">
                                <div className="referal-stats__dict-key">
                                    Total income:
                                </div>
                                <div className="referal-stats__dict-value">
                                    150$
                                </div>
                            </div>
                        </div>
                    </div>
				</FlexItem>
			</Flex>
		</Section>
    )
}

export default ReferalPage