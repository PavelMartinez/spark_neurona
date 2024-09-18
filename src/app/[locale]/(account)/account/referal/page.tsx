import AccountTable from '@/components/AccountTable/AccountTable';
import { EmojiRocket2 } from '@/components/svg'
import { Flex, FlexItem, Section } from '@/components/ui/layout'
import {Link} from '@/i18n/routing';
import React from 'react'

import AccountConvert from '@/components/AccountConvert/AccountConvert';

import { Breadcrumb } from 'antd';
import ReferalInput from '@/components/ReferalInput/ReferalInput';
import { IconArrowUpRight } from '@/components/ui/icons/IconArrowUpRight';
import { currentUser } from '@clerk/nextjs/server';
import { User } from '@/database/models/User';
import IReferal from '@/typescript/interfaces/Models/IReferal';
import { dbConnect } from '@/database/db';

const ReferalPage = async () => {
    await dbConnect();
    const user = await currentUser()
    const dbUser = await User.findOne({ externalId: user?.id });
    const referalsData = dbUser.referals.length > 0 ? JSON.parse(JSON.stringify(dbUser.referals)).map((item: IReferal, index: number) => {
		return {
			...item,
			key: String(index)
		}
	}) : [];
    return (
		<Section className='referal'>
            <Flex container>
                <div className="referal__text">
                    <div className="breadcrump">
                        <Breadcrumb items={[{ title: 'Dashboard', href: "/account" }, { title: 'Referal program'}]} className='breadcrump__component'/>
                    </div>
                    <div className="referal__heading">
                        <h3 className='referal__heading-h3'>
                            REFERAL PROGRAM
                            <Link className="account__back" href="/account">
                                <IconArrowUpRight size='20'/>
                            </Link>
                        </h3>
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
                                    <EmojiRocket2 />
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
                            <ReferalInput id={dbUser.referalString} />
                        </div>
					</div>
					<div className="referal__section">
						<div className="referal__section-heading referal__section-heading--big">
							YOUR REFERALS
						</div>
						<div className="referal__section-content">
							<AccountTable type='referal' data={referalsData}/>
						</div>
					</div>
				</FlexItem>
				<FlexItem className='referal__column'>
					<AccountConvert balance={dbUser.dollars || 0}/>
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
                                    {dbUser.referals.length} pers.
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