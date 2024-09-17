'use client';

import React, { MouseEventHandler, useEffect, useRef, useState } from 'react'
import { DiagonalArrowIcon, IconAI, SendIcon } from '../svg';
import { Form, Input } from '../ui/primitives';
import MessagesItemProps from '@/typescript/interfaces/Chat/MessagesItemProps';
import { Sender } from '@/typescript/enums/Chat/Sender';
import MessagesItem from './MessagesItem';
import Image from 'next/image'
import { useTranslations } from 'next-intl';
import { useMessages } from '@/utils/useMessages';

const ChatBox = () => {
    const [history, setHistory] = useState<MessagesItemProps[]>([]);
    // const [history, setHistory] = useState<MessagesItemProps[]>([])
    const [search, setSearch] = useState<string>('');
    const [isBottomButtonVisible, setIsBottomButtonVisible] = useState<boolean>(false);
    const chatbox = useRef<null | HTMLDivElement>(null);
    const chatboxWrapper = useRef<null | HTMLDivElement>(null);
    const t = useTranslations("ChatBox");
    const { addMessage, messages, isLoadingAnswer } = useMessages();

    const scrollToBottom = () => {
        chatbox.current?.scrollIntoView(false);
        setIsBottomButtonVisible(false);
    }

    const onScroll = () => {
        if (chatboxWrapper.current) {
            const { scrollTop, scrollHeight, clientHeight } = chatboxWrapper.current;
            if (scrollHeight - (scrollTop + clientHeight) > 100) {
                setIsBottomButtonVisible(true);
            }
            else {
                setIsBottomButtonVisible(false);
            }
        }
    };

    useEffect(() => {
        scrollToBottom();
    }, [history])

    useEffect(() => {
        if(messages)
        {
            setHistory(messages.filter(message => message.role !== "system").map(message => {
                return {
                    sender: message.role === "assistant" ? Sender.AI : Sender.USER,
                    text: message.content
                }
            }))
        }
    }, [messages])

    const handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
        setSearch(event.currentTarget.value);
    }

    const sendPrompt = (prompt: string) => {
        addMessage(prompt)
        // setHistory([...history,
        //     {
        //         sender: Sender.USER,
        //         text: prompt
        //     },
        //     {
        //         sender: Sender.AI,
        //         text: `## It is a test for your prompt\\nAI answer for prompt:\\n\\n${prompt}`
        //     }
        // ])
    }

    const handleSubmitInput = (e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        if(search) {
            sendPrompt(search);
            setSearch("");
        }
    }

    const handlePromptsClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if(event.currentTarget.textContent)
            sendPrompt(event.currentTarget.textContent)
    }
    return (
        <div className='chat-box'>
            {history.length === 0 ? 
            <>
                <button className='messages__history-button'>
                    {t('history-button')} 
                </button>
                <div className="chat-box__logo-wrapper">
                    <Image alt="" src="/Logo.png" className='chat-box__logo' width={57} height={57}/>
                </div>
                <div className="chat-box__prompts">
                    <button className="chat-box__prompts-item" onClick={handlePromptsClick}>
                        {t('prompts.list.1')}
                    </button>
                    <button className="chat-box__prompts-item"
                    onClick={handlePromptsClick}>
                        {t('prompts.list.2')}
                    </button>
                    <button className="chat-box__prompts-item"
                    onClick={handlePromptsClick}>
                        {t('prompts.list.3')}
                    </button>
                    <button className="chat-box__prompts-item"
                    onClick={handlePromptsClick}>
                        {t('prompts.list.4')}
                    </button>
                </div>
            </> :
            <div className='messages' onScroll={onScroll} ref={chatboxWrapper}>
                <button className='messages__history-button'>
                    {t('history-button')}
                </button>
                <div className='messages__inner' ref={chatbox}>
                    {history.map((value, index) => (
                        <MessagesItem sender={value.sender} text={value.text} key={index} />
                    ))}
                </div>
            </div>
            }
            {history.length > 0 && isBottomButtonVisible && 
                <button className="chat-box__scroll-button" onClick={() => scrollToBottom()}>
                    <DiagonalArrowIcon />
                </button>
            }
            <div className="chat-box__input-wrapper">
                <Form onSubmit={handleSubmitInput} className='chat-box__form'>
                    <Input className="chat-box__input" placeholder={t('input.placeholder')} onChange={handleInputChange} value={search}/>
                </Form>
                <button className="chat-box__input-button" onClick={handleSubmitInput}>
                    <SendIcon />
                </button>
            </div>
        </div>
    )
}

export default ChatBox;