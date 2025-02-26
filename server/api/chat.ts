import { defineEventHandler, readBody } from 'h3'
import { Mistral } from '@mistralai/mistralai';
import { ChatCompletionResponse } from '@mistralai/mistralai/models/components';

export default defineEventHandler(async (event) => {
    const chatBotMessages = await readBody(event)

    const apiKey = process.env.MISTRAL_API_KEY;
    const client = new Mistral({ apiKey: apiKey });

    const chatResponse: ChatCompletionResponse = await client.chat.complete({
        model: 'mistral-small',
        messages: chatBotMessages,
    });

    if (!chatResponse.choices?.length) {
        throw new Error('No response from chat API');
    }
    return chatResponse.choices[0].message.content;
}) 