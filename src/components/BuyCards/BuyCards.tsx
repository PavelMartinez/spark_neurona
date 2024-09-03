import React from 'react'
import { Flex } from '../ui/layout'
import BuyCardsItem from './BuyCardsItem'
import tariffsData from '@/data/accountBuy/data'

const BuyCards = () => {
    return (
        <Flex className="buy-cards"
        direction='row' wrap>
            {tariffsData.map((item, index) => (
                <BuyCardsItem
                    key={index}
                    {...item}
                />
            ))}
        </Flex>
    )
}

export default BuyCards