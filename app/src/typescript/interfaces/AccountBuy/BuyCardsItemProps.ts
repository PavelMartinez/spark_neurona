export default interface BuyCardsItemProps {
    id: string;
    emoji: any;
    title: string;
    priceCurrent: number;
    priceOld: number;
    diamonds?: number;
    benefits?: string[];
    isPopular?: boolean;
    currency?: string;
}