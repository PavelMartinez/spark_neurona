import { EmojiFire, EmojiRocket, EmojiThumb } from "@/components/svg";
import BuyCardsItemProps from "@/typescript/interfaces/AccountBuy/BuyCardsItemProps";

const TariffData: BuyCardsItemProps[] = [
    {
        emoji: <EmojiThumb />,
        title: "Basic",
        priceCurrent: 500000,
        priceOld: 600000,
        id: 0,
        benefits: [
            "$1/image",
            "4 Requests",
            "Full results",
            "No queue"
        ],
        diamonds: 8
    },
    {
        emoji: <EmojiRocket />,
        title: "Popular",
        priceCurrent: 500000,
        priceOld: 600000,
        id: 1,
        benefits: [
            "$1/image",
            "4 Requests",
            "Full results",
            "No queue"
        ],
        diamonds: 15,
        isPopular: true
    },
    {
        emoji: <EmojiFire />,
        title: "Pro",
        priceCurrent: 500000,
        priceOld: 600000,
        id: 2,
        benefits: [
            "$1/image",
            "4 Requests",
            "Full results",
            "No queue"
        ],
        diamonds: 30
    }
]

export default TariffData;