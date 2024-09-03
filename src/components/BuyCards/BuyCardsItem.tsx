import BuyCardsItemProps from "@/typescript/interfaces/AccountBuy/BuyCardsItemProps";
import { CheckSquareIcon, DiamondGoldIcon } from "../svg";
import { FlexItem } from "../ui/layout";
import Link from "next/link";

const BuyCardsItem = ({ emoji, title, priceCurrent, priceOld, benefits, isPopular = false, diamonds = 15, id }: BuyCardsItemProps) => (
    <FlexItem className={`buy-cards__item ${isPopular ? "buy-cards--popular buy-cards__item--border" : ""}`}>
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
                            {String(priceCurrent).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ")}
                        </div>
                        <div className="buy-cards__price-current__currency">
                            <span>
                                $
                            </span>
                            <span>
                                CAD
                            </span>
                        </div>
                    </div>
                    <div className="buy-cards__price-old">
                        {String(priceOld).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ")}
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
            <Link className="buy-cards__button" href={`/account/buy/${id}`}>
                CHOOSE PLAN
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
                MOST POPULAR
            </div>
        }
    </FlexItem>
)

export default BuyCardsItem;