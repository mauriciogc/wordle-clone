import { getRequestConfig } from 'next-intl/server';
import { getUserLocale } from '../services/locale';

const localeCache = new Map<string, Record<string, string>>();

export default getRequestConfig(async () => {
  const locale = await getUserLocale();
  if (localeCache.has(locale)) {
    return { locale, messages: localeCache.get(locale) };
  }

  const messages = (await import(`../../messages/${locale}.json`)).default;
  localeCache.set(locale, messages);
  return { locale, messages };
});
