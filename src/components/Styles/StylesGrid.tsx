
"use client";

import StylesDataFantasy from '@/data/styles/data_fantasy'
import StylesDataRealism from '@/data/styles/data_realism'
import React, { useState } from 'react'
import StylesItem from './StylesItem'
import StylesItemProps from '@/typescript/interfaces/Styles/StylesItemProps';

interface StylesGridProps {
    limit?: number;
}

enum SelectorState {
    FANTASY = "fantasy",
    REALISM = "realism"
}

const StylesGrid = ({ limit = 1000 }: StylesGridProps) => {
    const [selector, setSelector] = useState<SelectorState>(SelectorState.FANTASY)
    return (
        <>
            <div className="styles__selector">
                <button className={`styles__selector-button ${selector === SelectorState.FANTASY ? "styles__selector-button--selected" : ""}`} onClick={() => setSelector(SelectorState.FANTASY)}>
                    Fantasy
                </button>
                <button className={`styles__selector-button ${selector === SelectorState.REALISM ? "styles__selector-button--selected" : ""}`} onClick={() => setSelector(SelectorState.REALISM)}>
                    Realism
                </button>
            </div>
            <div className="styles__list">
                {selector === SelectorState.FANTASY ? 
                    StylesDataFantasy.map((item, index) => (
                        <div className="styles__item" key={index}>
                            <h3 className="styles__item-heading">
                                {item.category}
                            </h3>
                            <div className="styles__item-grid">
                                {item.items.map((value: StylesItemProps, index: number) => (
                                    <StylesItem
                                    image={value.image}
                                    heading={value.heading}
                                    href={value.href}
                                    key={`stylesItem${index}`}/>
                                ))}
                            </div>   
                        </div>
                    )) :
                    StylesDataRealism.map((item, index) => (
                        <div className="styles__item" key={index}>
                            <h3 className="styles__item-heading">
                                {item.category}
                            </h3>
                            <div className="styles__item-grid">
                                {item.items.map((value: StylesItemProps, index: number) => (
                                    <StylesItem
                                    image={value.image}
                                    heading={value.heading}
                                    href={value.href}
                                    key={`stylesItem${index}`}/>
                                ))}
                            </div>   
                        </div>
                    ))
                }
            </div>    
        </>

    )
}

export default StylesGrid