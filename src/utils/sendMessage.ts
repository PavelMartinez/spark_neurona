import { ChatCompletionRequestMessage } from "@/typescript/types/ChatCompletionRequestMessage"

export const sendMessage = async (messages: ChatCompletionRequestMessage[]) => {
  try {
    const response = await fetch('/api/ai/chat/createMessage', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ messages })
    })

    return await response.json()
  } catch (error) {
    console.log(error)
  }
}