import { Flex, Section } from '@/components/ui/layout'
import React from 'react'
import {Link} from '@/i18n/routing';;
import StylesGrid from '@/components/Styles/StylesGrid';
import { useTranslations } from 'next-intl';

const StylesPage = () => {
    const t = useTranslations("StylesPage")
    return (
        <Section className="styles">
            <Flex container className="styles__inner" direction='column' alignSecondary='center'>
                <h1 className="styles__heading">
                    {t('heading')}
                </h1>
                <div className="styles__description">
                    <p>
                        {t('description')}
                    </p>
                </div>
                <Link className="styles__link" href="/">
                    {t('link')}     
                </Link>
                <StylesGrid />
            </Flex>
        </Section>
    )
}

export default StylesPage