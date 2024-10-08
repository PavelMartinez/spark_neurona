
"use client";

import { SparkData } from '@/data/styles/data_spark';
import React, { useEffect, useState } from 'react'
import StylesItem from './StylesItem'
import StylesItemProps from '@/typescript/interfaces/Styles/StylesItemProps';
import ISparkData from '@/typescript/interfaces/Styles/ISparkData';
import { SelectorState } from '@/typescript/enums/Styles/SelectorState';

interface StylesGridProps {
    limit?: number;
}



type GroupedCategories = [string, ISparkData[] | undefined][];

type CategoriesType = {
    [SelectorState.FANTASY]: GroupedCategories;
    [SelectorState.REALISM]: GroupedCategories;
};

const StylesGrid = ({ limit = 1000 }: StylesGridProps) => {
    const [selector, setSelector] = useState<SelectorState>(SelectorState.FANTASY);
    const [categories, setCategories] = useState<CategoriesType>()

    useEffect(() => {
        function setData() {
            const BigCategories = {
                [SelectorState.FANTASY]: Object.groupBy(SparkData, ({ BigCategory }) => BigCategory)[SelectorState.FANTASY]!,
                [SelectorState.REALISM]: Object.groupBy(SparkData, ({ BigCategory }) => BigCategory)[SelectorState.REALISM]!
            }
            const Categories = {
                [SelectorState.FANTASY]: Object.entries(Object.groupBy(BigCategories[SelectorState.FANTASY], ({ CategoryName }) => CategoryName)),
                [SelectorState.REALISM]: Object.entries(Object.groupBy(BigCategories[SelectorState.REALISM], ({ CategoryName }) => CategoryName))
            }
            setCategories(Categories)
            console.log(Categories)
        }
        setData()
    }, [])
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
                    <>
                        {categories && categories[SelectorState.FANTASY].map(([key, value]) => (
                            <div className="styles__item" key={key}>
                                <h3 className="styles__item-heading">
                                    {key}
                                </h3>
                                <div className="styles__item-grid">
                                    {value && value.map((item, index) => {
                                        return (
                                            <StylesItem
                                                image={`/styles_spark/${item.FileName}`}
                                                heading={item.StyleName}
                                                href={`/generator/${encodeURIComponent(item.CategoryName)}/${encodeURIComponent(item.StyleName)}`}
                                                key={`stylesItem${index}`}
                                            />
                                        )
                                    })}
                                </div>   
                            </div>
                        ))}
                    </> :
                    <>
                        {categories && categories[SelectorState.REALISM].map(([key, value]) => (
                            <div className="styles__item" key={key}>
                                <h3 className="styles__item-heading">
                                    {key}
                                </h3>
                                <div className="styles__item-grid">
                                    {value && value.map((item, index) => {
                                        return (
                                            <StylesItem
                                                image={`/styles_spark/${item.FileName}`}
                                                heading={item.StyleName}
                                                href={`/generator/${encodeURIComponent(item.CategoryName)}/${encodeURIComponent(item.StyleName)}`}
                                                key={`stylesItem${index}`}
                                            />
                                        )
                                    })}
                                </div>   
                            </div>
                        ))}
                    </>
                }
            </div>    
        </>

    )
}

export default StylesGrid