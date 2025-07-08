import id from './id-ID'
import en from './en-US'

const defaultLocale = 'en'

export default defineI18nConfig(() => ({
  legacy: false,
  locale: defaultLocale,
  fallbackLocale: defaultLocale,
  messages: { id, en }
}))
