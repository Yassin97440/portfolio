import { defineEventHandler, readBody, H3Event } from 'h3'
import { Mistral } from '@mistralai/mistralai';
import { ChatCompletionResponse } from '@mistralai/mistralai/models/components';

const config = useRuntimeConfig()

const handleRequest = (event: H3Event) => {
    // Configurer les headers CORS
    setResponseHeaders(event, {
        'Access-Control-Allow-Methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*'
    })

    // Gérer les requêtes OPTIONS (preflight)
    if (event.method === 'OPTIONS') {
        return 'OK'
    }
}
export default defineEventHandler(async (event) => {
    // Configurer les headers CORS
    handleRequest(event)
    const chatBotMessages = await readBody(event)

    const apiKey = config.public.mistralApiKey
    const client = new Mistral({ apiKey: apiKey })

    try {
        const chatResponse: ChatCompletionResponse = await client.chat.complete({
            model: 'mistral-large-latest',
            messages: chatBotMessages,
        })

        if (!chatResponse.choices?.length) {
            throw new Error('No response from chat API')
        }
        return chatResponse.choices[0].message.content
    }
    catch (error) {

        return error
    }
}) 