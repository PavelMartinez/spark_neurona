'use client';

import React, { ChangeEvent, FormEvent, ReactEventHandler, useEffect, useRef, useState } from 'react'
import { Textarea, TextareaField } from '../ui/primitives';
import { Motion } from '../Motion/Motion';
import { SparkData } from '@/data/styles/data_spark';
import ISparkData from '@/typescript/interfaces/Styles/ISparkData';
import StylesItem from '../Styles/StylesItem';
import Link from 'next/link';
import { DownArrowIcon, LockIcon } from '../svg';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { SelectorState } from '@/typescript/enums/Styles/SelectorState';

enum Model {
    STANDART = "Standart",
    HD = "HD",
    GENIUS = "Genius"
}

enum Preference {
    SPEED = "Speed",
    QUALITY = "Quality"
}

interface GeneratorProps {
    Category?: string;
    StyleName?: string;
}

const Generator = ({ Category, StyleName }: GeneratorProps) => {
    const [style, setStyle] = useState<ISparkData>({
        CategoryName: "Default",
        StyleName: "Default",
        FileName: "Logo.png",
        ContentType: "image/jpeg",
        Promt: "",
        BigCategory: "fantasy"
    })
    const [promt, setPromt] = useState<string>("")
    const [image, setImage] = useState<string>("")
    const [dimensions, setDimensions] = useState<{ width: number; height: number; type: 1 | 2 | 3 | 4 | 5 }>({ width: 1024, height: 576, type: 1 })
    const [model, setModel] = useState<Model>(Model.STANDART)
    const [selectorExpanded, setSelectorExpanded] = useState<boolean>(false)
    const [preference, setPreference] = useState<Preference>(Preference.SPEED)
    const router = useRouter()
    const pathname = usePathname()
    const imageRef = useRef<HTMLImageElement>(null)

    const handleTextareaChange = (value: string) => {
        setPromt(value)
    }

    const qualityCoeff = {
        [Model.STANDART]: 1,
        [Model.HD]: 1,
        [Model.GENIUS]: 1
    }

    const handleGenerateClick = async () => {
        try {
            let data;
            if(imageRef.current)
            {
                imageRef.current.width = dimensions.width;
                imageRef.current.height = dimensions.height;
            }
            if(style.BigCategory === SelectorState.FANTASY)
            {
                console.log("anime")
                data = await fetch(`/api/ai/anime`, {
                    method: "POST",
                    body: JSON.stringify(
                        {
                            promt: promt,
                            height: dimensions.height * qualityCoeff[model],
                            width: dimensions.width * qualityCoeff[model]
                        }
                    )
                });
            }
            else {
                console.log("realism")
                data = await fetch(`/api/ai/realism`, {
                    method: "POST",
                    body: JSON.stringify(
                        {
                            promt: promt,
                            height: dimensions.height  * qualityCoeff[model],
                            width: dimensions.width  * qualityCoeff[model],
                            fileName: style.FileName
                        }
                    )
                });
            }
            if(data.headers.get("Content-Type") === "text/plain")
            {
                const encodedImage = await data.text();
                setImage(`data:image/png;base64,${encodedImage}`);
                console.log(`data:image/png;base64,${encodedImage}`)
            }
            else
            {
                const response = await data.json();
                if(response.error.message === "Unauthorized")
                {
                    return router.push('/sign-in?redirect=' + pathname)
                }
            }
        } catch(e) {
            console.error(e)
        }

    }

    useEffect(() => {
        if(Category && StyleName)
        {
            const style = SparkData.find((value) => value.CategoryName === decodeURIComponent(Category) && value.StyleName === decodeURIComponent(StyleName))
            if(style)
            {
                setStyle(style)
                setPromt(style.Promt)
            }
        }
    }, [])

    return (
        <div className='generator'>
            <div className="generator-settings">
                <div className="generator-settings__part">
                    <Setting title='Create an image from text prompt'>
                        <TextareaField onChange={handleTextareaChange} placeholder="Your prompt here" value={promt} className={"generator-settings__textarea"}/>
                    </Setting>
                </div>
                <div className="generator-settings__part">
                    <Setting title='Choose a model'>
                        <Motion type='ul' className="generator-settings__slider">
                            <Motion
                                type="li"
                                className={`generator-settings__slider-item ${model === Model.STANDART ? "generator-settings__slider-item--active" : ""}`}
                                onClick={() => { setModel(Model.STANDART) }}
                            >
                                {Model.STANDART}
                            </Motion>
                            <Motion
                                type="li"
                                className={`generator-settings__slider-item ${model === Model.HD ? "generator-settings__slider-item--active" : ""}`}
                                onClick={() => { setModel(Model.HD) }}
                            >
                                {Model.HD}
                            </Motion>
                            <Motion
                                type="li"
                                className={`generator-settings__slider-item generator-settings__slider-item--gold ${model === Model.GENIUS ? "generator-settings__slider-item--active" : ""}`}
                                onClick={() => { }}
                            >
                                <LockIcon />
                                {Model.GENIUS}
                            </Motion>
                        </Motion>
                    </Setting>
                    <Setting title='Preference'>
                        <Motion type='ul' className="generator-settings__slider">
                            <Motion
                                type="li"
                                className={`generator-settings__slider-item ${preference === Preference.SPEED ? "generator-settings__slider-item--active" : ""}`}
                                onClick={() => { setPreference(Preference.SPEED) }}
                            >
                                {Preference.SPEED}
                            </Motion>
                            <Motion
                                type="li"
                                className={`generator-settings__slider-item ${preference === Preference.QUALITY ? "generator-settings__slider-item--active" : ""}`}
                                onClick={() => { setPreference(Preference.QUALITY) }}
                            >
                                {Preference.QUALITY}
                            </Motion>
                        </Motion>
                    </Setting>
                </div>
                <div className="generator-settings__part" style={{ gap: 41 }}>
                    <Setting title='Choose a style'>
                        <ul className="generator-settings__styles">
                            <StylesItem
                                image={`/${style.StyleName != "Default" ? "styles_spark/" : ""}${style.FileName}`}
                                href={`/generator/${style.CategoryName}/${style.StyleName}`}
                                key={`stylesItem_${style.StyleName}`}
                                nowrap
                                className="generator-settings__styles-item generator-settings__styles-item--selected"
                            />
                            {SparkData && SparkData.filter((v) => v.StyleName != style.StyleName).slice(10,14).map((item, index) => {
                                return (
                                    <StylesItem
                                        image={`/styles_spark/${item.FileName}`}
                                        href={`/generator/${item.CategoryName}/${item.StyleName}`}
                                        key={`stylesItem${index}`}
                                        nowrap
                                        className="generator-settings__styles-item"
                                    />
                                )
                            })}
                        </ul>
                    </Setting>
                    <Link href={"/styles"} className="generator-settings__button">
                        View all +100 styles
                    </Link>
                </div>
                <div className="generator-settings__selector">
                    <div className="generator-settings__selector-heading" onClick={() => setSelectorExpanded(!selectorExpanded)}>
                        <div className="generator-settings__selector-heading__text">
                            Choose shape
                        </div>
                        <div className={`generator-settings__selector-heading__icon ${selectorExpanded ? "generator-settings__selector-heading__icon--rotated" : ""}`}>
                            <DownArrowIcon />
                        </div>
                    </div>
                    {selectorExpanded &&
                        <div className="generator-settings__selector-content">
                            <div 
                                onClick={() => setDimensions({ width: 1024, height: 576, type: 1 })}
                                data-active={dimensions?.type === 1}
                                className="generator-settings__selector-shape"
                            />
                            <div 
                                onClick={() => setDimensions({ width: 1024, height: 768, type: 2 })}
                                data-active={dimensions?.type === 2}
                                className="generator-settings__selector-shape"
                            />
                            <div 
                                onClick={() => setDimensions({ width: 512, height: 512, type: 3 })}
                                data-active={dimensions?.type === 3}
                                className="generator-settings__selector-shape"
                            />
                            <div 
                                onClick={() => setDimensions({ width: 768, height: 1024, type: 4 })}
                                data-active={dimensions?.type === 4}
                                className="generator-settings__selector-shape"
                            />
                            <div 
                                onClick={() => setDimensions({ width: 576, height: 1024, type: 5 })}
                                data-active={dimensions?.type === 5}
                                className="generator-settings__selector-shape"
                            />
                        </div>
                    }
                </div>
                <button onClick={handleGenerateClick} className="generator-settings__button generator-settings__button--gradient">
                    Generate
                </button>
            </div>
            <div className="generator-result">
                {style.StyleName === "Default" && !image && 
                    <Image src={"/Logo.png"} alt="Generation Default" className="generator-result__image generator-result__image--default" sizes='100vw' width={0} height={0} />
                }
                {style.StyleName != "Default" && !image && 
                    <Image src={"/styles_spark/" + style.FileName} alt="Generation Result" className="generator-result__image generator-result__image--example" width={0} sizes='100vw' height={0} />
                }
                <Image ref={imageRef} src={decodeURIComponent(image)} alt="Generation Result" className={`generator-result__image ${!image ? "visually-hidden" : ""}`} width={0} sizes='100vw' height={0} />
            </div>
        </div>
    )
}

const Setting = ({ title, children }: { title: string; children: React.ReactNode }) => {
    return (
        <div className="generator-settings__item">
            <div className="generator-settings__item-title">
                {title}
            </div>
            <div className="generator-settings__item-content">
                {children}
            </div>
        </div>
    )
}

export default Generator