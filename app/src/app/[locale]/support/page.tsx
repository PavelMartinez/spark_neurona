import { Flex, Section } from '@/components/ui/layout'
import React from 'react'
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/primitives';
import { Accordion } from '@/components/Accordion/Accordion';
import SupportForm from '@/components/SupportForm/SupportForm';

const SupportPage = () => {
    const t = useTranslations()
    return (
        <Section className="support">
            <Flex container className="support__inner" direction='column' alignSecondary='center'>
                <h1 className="support__heading">
                    {t('SupportPage.heading')}
                </h1>
                <div className="support__description">
                    <p>
                        {t('SupportPage.description')}
                    </p>
                </div>
                <SupportForm />
                <Flex
                    wrap
                    container
                    className="support-faq"
                    alignPrimary="center"
                    alignSecondary="center"
                    direction="column">
                    <h2 className="support-faq__heading">{t('HomePage.main-faq.heading').toLocaleLowerCase()}</h2>
                    <Accordion intlName="support" />
                </Flex>
            </Flex>
        </Section>
    )
}

export default SupportPage