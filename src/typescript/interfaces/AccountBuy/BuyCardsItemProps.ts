export default interface BuyCardsItemProps {
    id: number;
    emoji: any;
    title: string;
    priceCurrent: number;
    priceOld: number;
    diamonds?: number;
    benefits?: string[];
    isPopular?: boolean;
}