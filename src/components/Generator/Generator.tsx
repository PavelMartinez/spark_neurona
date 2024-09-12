'use client';

import React, { ChangeEvent, FormEvent, ReactEventHandler, useEffect, useRef, useState } from 'react'
import { Textarea, TextareaField } from '../ui/primitives';
import { Motion } from '../Motion/Motion';
import { SparkData } from '@/data/styles/data_spark';
import ISparkData from '@/typescript/interfaces/Styles/ISparkData';
import StylesItem from '../Styles/StylesItem';
import {Link} from '@/i18n/routing';;
import { DownArrowIcon, LockIcon } from '../svg';
import Image from 'next/image';
import { usePathname } from "@/i18n/routing";
import { useRouter } from 'next/navigation';
import { SelectorState } from '@/typescript/enums/Styles/SelectorState';
import { useTranslations } from 'next-intl';
import { Progress } from 'antd';

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
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [percent, setPercent] = useState<number>(0)
    const [preference, setPreference] = useState<Preference>(Preference.SPEED)
    const router = useRouter()
    const pathname = usePathname()
    const imageRef = useRef<HTMLImageElement>(null)
    const t = useTranslations("Generator")

    const handleTextareaChange = (value: string) => {
        setPromt(value)
    }

    const qualityCoeff = {
        [Model.STANDART]: 0.6,
        [Model.HD]: 0.8,
        [Model.GENIUS]: 1
    }

    const handleGenerateClick = async () => {
        try {
            setIsLoading(true)
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
            setIsLoading(false)
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

    useEffect(() => {
        if (!isLoading) {
            setPercent(0);
            return;
        }

        const duration = 20 * 1000;
        const interval = 100;
        const increment = (100 * interval) / duration;

        const timer = setInterval(() => {
            setPercent(prev => {
                const nextValue = Math.min(prev + increment, 100);
                return nextValue;
            });
        }, interval);

        return () => clearInterval(timer);
    }, [isLoading]);

    return (
        <div className='generator'>
            <div className="generator-settings">
                <div className="generator-settings__part">
                    <Setting title={t('prompt.title')}>
                        <TextareaField onChange={handleTextareaChange} placeholder={t('prompt.placeholder')} value={promt} className={"generator-settings__textarea"} aria-label='Prompt place'/>
                    </Setting>
                </div>
                <div className="generator-settings__part">
                    <Setting title={t('model.title')}>
                        <Motion type='ul' className="generator-settings__slider">
                            <Motion
                                type="li"
                                className={`generator-settings__slider-item ${model === Model.STANDART ? "generator-settings__slider-item--active" : ""}`}
                                onClick={() => { setModel(Model.STANDART) }}
                            >
                                {t("enum.model.standart")}
                            </Motion>
                            <Motion
                                type="li"
                                className={`generator-settings__slider-item ${model === Model.HD ? "generator-settings__slider-item--active" : ""}`}
                                onClick={() => { setModel(Model.HD) }}
                            >
                                {t('enum.model.hd')}
                            </Motion>
                            <Motion
                                type="li"
                                className={`generator-settings__slider-item generator-settings__slider-item--gold ${model === Model.GENIUS ? "generator-settings__slider-item--active" : ""}`}
                                onClick={() => { }}
                            >
                                <LockIcon />
                                {t('enum.model.genius')}
                            </Motion>
                        </Motion>
                    </Setting>
                    <Setting title={t('preference.title')}>
                        <Motion type='ul' className="generator-settings__slider">
                            <Motion
                                type="li"
                                className={`generator-settings__slider-item ${preference === Preference.SPEED ? "generator-settings__slider-item--active" : ""}`}
                                onClick={() => { setPreference(Preference.SPEED) }}
                            >
                                {t('enum.preference.speed')}
                            </Motion>
                            <Motion
                                type="li"
                                className={`generator-settings__slider-item ${preference === Preference.QUALITY ? "generator-settings__slider-item--active" : ""}`}
                                onClick={() => { setPreference(Preference.QUALITY) }}
                            >
                                {t('enum.preference.quality')}
                            </Motion>
                        </Motion>
                    </Setting>
                </div>
                <div className="generator-settings__part" style={{ gap: 41 }}>
                    <Setting title={t('styles.title')}>
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
                    <Link href={"/styles"} className="generator-settings__button generator-settings__button--pink">
                        {t('styles.button')}
                    </Link>
                </div>
                <div className="generator-settings__selector">
                    <div className="generator-settings__selector-heading" onClick={() => setSelectorExpanded(!selectorExpanded)}>
                        <div className="generator-settings__selector-heading__text">
                            {t('selector.heading')}
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
                <div className="generator-settings__buttons-wrapper">
                    <button onClick={handleGenerateClick} disabled={isLoading} className={`generator-settings__button generator-settings__button--border ${!image ? "generator-settings__button--gradient" : ""}`}>
                        {t('generate-button')}
                    </button>
                    {image &&
                        <button onClick={handleGenerateClick} disabled={isLoading} className={`generator-settings__button generator-settings__button--black`}>
                            {t('share-button')}
                        </button>
                    }
                </div>
            </div>
            <div className="generator-result">
                <div className="generator-result__image-wrapper">
                    {style.StyleName === "Default" && !image && !isLoading &&
                        <Image src={"/Logo.png"} alt={t('image.default.alt')} className="generator-result__image generator-result__image--default" sizes='100vw' width={0} height={0} />
                    }
                    {style.StyleName != "Default" && !image && 
                        <Image src={"/styles_spark/" + style.FileName} alt={t('image.result.alt')} className="generator-result__image generator-result__image--example" width={0} sizes='100vw' height={0} />
                    }
                    <Image ref={imageRef} src={decodeURIComponent(image) || ""} alt={t('image.result.alt')} className={`generator-result__image ${!image ? "visually-hidden" : ""}`} width={0} sizes='100vw' height={0} />
                    {isLoading &&
                        <div className="generator-result__loader-wrapper">
                            <div className="generator-result__loader">
                                <Image src={"/Logo.png"} alt="" className="generator-result__loader-image" sizes='100vw' width={82} height={82} />
                                <div className="generator-result__loader-text">
                                    Generate amazing results
                                </div>
                            </div>
                        </div>
                    }
                </div>
                {isLoading && 
                    <div className="generator-result__progress-wrapper">
                        <Progress percent={percent} showInfo={false} trailColor='#070707' strokeColor={"var(--button-1)"}/>
                    </div>
                }
                {!isLoading && image &&
                    <button onClick={handleGenerateClick} disabled={isLoading} className="generator-settings__button generator-settings__button--gradient generator-settings__button--border">
                        {t('save-button')}
                    </button>
                }
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