import { Flex, Section } from '@/components/ui/layout'
import React from 'react'
import {Link} from '@/i18n/routing';;
import StylesGrid from '@/components/Styles/StylesGrid';
import ChatBox from '@/components/Chat/ChatBox';
import { useTranslations } from 'next-intl';

const ChatPage = () => {
    const t = useTranslations("ChatPage");
    return (
        <Section className="chat">
            <Flex container className="chat__inner" direction='column' alignSecondary='center'>
                <h1 className="chat__heading">
                    {t('heading')}
                </h1>
                <div className="chat__description">
                    <p>
                        {t('description')}
                    </p>
                </div>
                <ChatBox />
            </Flex>
        </Section>
    )
}

export default ChatPage