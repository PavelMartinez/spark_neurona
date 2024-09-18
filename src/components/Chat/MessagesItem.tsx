import { Sender } from '@/typescript/enums/Chat/Sender'
import MessagesItemProps from '@/typescript/interfaces/Chat/MessagesItemProps'
import React, { useEffect, useState } from 'react'
import Markdown from 'react-markdown'
import { CopyIcon, DislikeIcon, ExchangeIcon, IconAI, SparklesIcon, VolumeUpIcon } from '../svg'
import { ButtonGroup, IconButton } from '../ui/primitives'
import { useMessages } from '@/utils/useMessages'


const MessagesItem = ({ sender, text }: MessagesItemProps) => {
    const { addMessage, messages, setMessages } = useMessages();
    const [speachText, setSpeachText] = useState<string>("")

    useEffect(() => {
        if(speachText)
        {
            speechSynthesis.cancel()
            speechSynthesis.speak(new SpeechSynthesisUtterance(speachText));
        }
        else {
            speechSynthesis.cancel()
        }
    }, [speachText])
    return (
        <>
            {sender === Sender.AI ? 
                <article className="messages-item messages-item--ai">
                    <div className="messages-item__logo">
                        <IconAI />
                    </div>
                    <div className="messages-item__content">
                        <Markdown
                            components={{
                                h1: 'h5',
                                h2: 'h5',
                                h3: 'h5',
                                h4: 'h5',
                                code: 'code' 
                            }}
                            className="messages-item__text"
                        >
                            {text}
                        </Markdown>
                        <ButtonGroup className="messages-item__icons">
                            <IconButton 
                                className="messages-item__icons-item"
                                aria-label='sound'
                                variant='subtle'
                                onPress={() => { setSpeachText(speachText ? "" : text) }}
                            >
                                <VolumeUpIcon />
                            </IconButton>
                            <IconButton 
                                className="messages-item__icons-item"
                                aria-label='copy'
                                variant='subtle'
                                onPress={() => {navigator.clipboard.writeText(text)}}
                            >
                                <CopyIcon />
                            </IconButton>
                            <IconButton 
                                className="messages-item__icons-item"
                                aria-label='regenerate'
                                variant='subtle'
                                onPress={() => { 
                                    const assistantMessage = messages.find((message) => message.content === text)
                                    const userMessage = messages[messages.indexOf(assistantMessage!) - 1];
                                    return addMessage(userMessage.content)
                                }}
                            >
                                <ExchangeIcon />
                            </IconButton>
                            <IconButton 
                                className="messages-item__icons-item"
                                aria-label='dislike'
                                variant='subtle'
                            >
                                <DislikeIcon />
                            </IconButton>
                            {/* <IconButton 
                                className="messages-item__icons-item"
                                aria-label='sparkles'
                                variant='subtle'
                            >
                                <SparklesIcon />
                            </IconButton> */}
                        </ButtonGroup>
                    </div>
                </article>
            :
            <>
                <article className="messages-item messages-item--user">
                    <Markdown components={{ h1: 'h5', h2: 'h5', h3: 'h5', h4: 'h5', code: 'code' }} className="messages-item__text">{text}</Markdown>
                </article>
            </>}
        </>
    )
}

export default MessagesItem