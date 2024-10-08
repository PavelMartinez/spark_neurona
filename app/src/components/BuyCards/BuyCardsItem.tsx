"use client";

import BuyCardsItemProps from "@/typescript/interfaces/AccountBuy/BuyCardsItemProps";
import { CheckSquareIcon, DiamondGoldIcon } from "../svg";
import { FlexItem } from "../ui/layout";
import Link from "next/link";
import { useFormatter, useTranslations } from "next-intl";

const BuyCardsItem = ({ emoji, title, priceCurrent, priceOld, benefits, isPopular = false, diamonds = 15, id, currency = "usd" }: BuyCardsItemProps) => {
    const format = useFormatter()
    const t = useTranslations("BuyCardsItem");
    
    return (<FlexItem className={`buy-cards__item ${isPopular ? "buy-cards--popular buy-cards__item--border" : ""}`}>
        <div className="buy-cards__info">
            <div className="buy-cards__info-emoji">
                {emoji}
            </div>
            <div className="buy-cards__info-content">
                <div className="buy-cards__title">
                    {title}
                </div>
                <div className="buy-cards__price">
                    <div className="buy-cards__price-current">
                        <div className="buy-cards__price-current__value">
                            {format.number(priceCurrent, {style: 'currency', currency: currency})}
                        </div>
                        <div className="buy-cards__price-current__currency">
                            <span>
                                {currency.toLocaleUpperCase()}
                            </span>
                        </div>
                    </div>
                    <div className="buy-cards__price-old">
                        {format.number(priceOld, {style: 'currency', currency: currency})}
                    </div>
                </div>
            </div>
        </div>
        <div className="buy-cards__list-wrapper">
            <ul className="buy-cards__list">
                {benefits?.map((s, index) => (
                    <li className="buy-cards__list-item" key={`benefits_${index}`}>
                        <span className="buy-cards__list-item__icon">
                            <CheckSquareIcon />
                        </span>
                        <span className="buy-cards__list-item__text">
                            {s}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
        <div className="buy-cards__button-wrapper">
            <Link className={`buy-cards__button ${isPopular ? "buy-cards__button--popular " : ""}`} href={`/account/buy/${id}`}>
                {t('choose-plan')}
            </Link>
        </div>
        <div className="buy-cards__diamonds">
            <div className="buy-cards__diamonds-icon">
                <DiamondGoldIcon />
            </div>
            <div className="buy-cards__diamonds-counter">
                {diamonds}
            </div>
        </div>
        {isPopular &&
            <div className="buy-cards__popular">
                {t('most-popular')}
            </div>
        }
    </FlexItem>
    )
}

export default BuyCardsItem;