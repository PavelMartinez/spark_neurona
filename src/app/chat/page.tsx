import { Flex, Section } from '@/components/ui/layout'
import React from 'react'
import Link from 'next/link';
import StylesGrid from '@/components/Styles/StylesGrid';
import ChatBox from '@/components/Chat/ChatBox';

const ChatPage = () => {
  return (
    <Section className="chat">
        <Flex container className="chat__inner" direction='column' alignSecondary='center'>
            <h1 className="chat__heading">
                AI Chat
            </h1>
            <div className="chat__description">
                <p>
                    AI Chat is an AI chatbot that writes text. You can use it to write stories, messages, or programming code. <br/>
                    You can use the AI chatbot as a virtual tutor in almost any subject.
                </p>
            </div>
            <ChatBox />
        </Flex>
    </Section>
  )
}

export default ChatPage