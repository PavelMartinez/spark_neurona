import AccountTable from '@/components/AccountTable/AccountTable';
import { BigDiamondIcon, DialogIcon, DiamondIcon, Group2Icon, StarIcon, WalletMoneyIcon } from '@/components/svg'
import { Flex, FlexItem, Section } from '@/components/ui/layout'
import { Button } from '@/components/ui/primitives'
import {Link} from '@/i18n/routing';
import React from 'react'

import AccountConvert from '@/components/AccountConvert/AccountConvert';
import Image from 'next/image';

import AppleLogo from '../../../../../public/AppleLogo.png'
import { currentUser } from '@clerk/nextjs/server';
import { User } from '@/database/models/User';
import IPayment from '@/typescript/interfaces/Models/IPayment';
import { getTranslations } from 'next-intl/server';
import { dbConnect } from '@/database/db';

const AccountPage = async () => {
	const user = await currentUser()
	const t = await getTranslations();
	await dbConnect();
	const dbUser = await User.findOne({ externalId: user?.id });

	let payments;
	if(dbUser)
	{
		payments = dbUser.payments.length > 0 ? JSON.parse(JSON.stringify(dbUser.payments)).map((item: IPayment, index: number) => {
			return {
				...item,
				key: String(index)
			}
		}) : [];
	}
    return (
		<Section className='account'>
			<Flex
				container
				className='account__inner'
				direction='row'
				wrap
			>
				<FlexItem className='account__column'>
					<h2 className="account__greeting">
						{t('AccountPage.greeting', { name: user?.firstName || "user" })}
					</h2>
					<div className="account__section">
						<div className="account__section-heading">
							{t('AccountPage.here-your-balance')}
						</div>
						<div className="account__section-content">
							<div className="account-balance">
								<div className="account-balance__line"></div>
								<div className="account-balance__left">
									<div className="account-balance__left-text">
										{t('AccountPage.coins-balance')}
									</div>
									<div className="account-balance__counter">
										<div className="account-balance__counter-text">
											{dbUser?.coins || 0}
										</div>
										<div className="account-balance__counter-icon">
											<DiamondIcon />
										</div>
									</div>
								</div>
								<div className="account-balance__right">
									<div className="account-balance__right-content">
										<div className="account-balance__right-text">
											{t('AccountPage.top-up-your-balance-right-now')}
										</div>
										<Link href="/account/buy">
											<Button className="account-balance__button">
												<span className="account-balance__button-text">
													{t('AccountPage.buy-coins-button')}
												</span>
												<span className="account-balance__button-icon">
													<DiamondIcon />
												</span>
											</Button>
										</Link>
									</div>
									<div className="account-balance__right-diamond">
										<BigDiamondIcon className="account-balance__right-diamond__svg"/>
									</div>
									<div className="account-balance__right-star account-balance__right-star--1">
										<StarIcon />
									</div>
									<div className="account-balance__right-star account-balance__right-star--2">
										<StarIcon />
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="account__section">
						<div className="account__section-heading account__section-heading--big">
							{t('AccountPage.payment-history-heading')}
						</div>
						<div className="account__section-content">
							<AccountTable type='payment' data={payments || []}/>
						</div>
					</div>
				</FlexItem>
				<FlexItem className='account__column'>
					<Link href={"/account/support"} className='account__column-button__wrapper'>
						<Button variant='neutral' className="account__column-button">
							<div className="account__column-button__icon">
								<DialogIcon />
							</div>
							<div className="account__column-button__text">
								{t('AccountPage.support.button')}
							</div>
						</Button>
					</Link>
					{/* <AccountConvert balance={dbUser?.dollars || 0}/> */}
					<div className="account-referal">
						<div className="account-referal__part">
							<div className="account-referal__badge">
								<div className="account-referal__badge-icon">
									<Group2Icon />
								</div>
								<div className="account-referal__badge-text">
									{t('AccountPage.referal.badge')}
								</div>
							</div>
							<h3 className="account-referal__text">
								{t('AccountPage.referal.text')}
							</h3>
							<div className="account-referal__wallet">
								<WalletMoneyIcon />
							</div>
						</div>
						<div className="account-referal__part">
							<div className="account-referal__counter">
								<div className="account-referal__counter-value">
									{dbUser?.referals.length || 0}
								</div>
								<div className="account-referal__counter-description">
									{t('AccountPage.referal.count')}
								</div>
							</div>
							<button className="account-referal__button">{t('AccountPage.referal.details')}</button>
						</div>
					</div>
					<div className="account-mobiles">
						<Link href="/ios" className='account-mobiles__link'>
							<Image alt="appleLogo"
							className="account-mobiles__link-logo"
							src={AppleLogo}
							width={64}
							height={64}
							sizes='100vw' />
							<div className="account-mobiles__link-text">
								Apple
							</div>
						</Link>
						{/* <Link href="/" className='account-mobiles__link'>
							<Image alt="appleLogo"
							className="account-mobiles__link-logo"
							src={AndroidLogo}
							width={64}
							height={64}
							sizes='100vw' />
							<div className="account-mobiles__link-text">
								Android
							</div>
						</Link> */}
					</div>
				</FlexItem>
			</Flex>
		</Section>
    )
}

export default AccountPage