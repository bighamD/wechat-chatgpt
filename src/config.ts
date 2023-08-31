import * as dotenv from 'dotenv'
dotenv.config()
import { IConfig } from './interface'

export const config: IConfig = {
  api: process.env.API || 'https://api.openai.com',
  openai_api_key:
    process.env.OPENAI_API_KEY ||
    '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',
  model: process.env.MODEL || 'gpt-3.5-turbo',
  chatPrivateTriggerKeyword: process.env.CHAT_PRIVATE_TRIGGER_KEYWORD || 'AI',
  chatTriggerRule: process.env.CHAT_TRIGGER_RULE || '',
  disableGroupMessage: false,
  temperature: process.env.TEMPERATURE
    ? parseFloat(process.env.TEMPERATURE)
    : 0.6,
  blockWords: process.env.BLOCK_WORDS?.split(',') || [],
  chatgptBlockWords: process.env.CHATGPT_BLOCK_WORDS?.split(',') || []
}
