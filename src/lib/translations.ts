import { createTranslator, useLocale as useLocaleIntl, useTranslations } from 'next-intl';
import { createSharedPathnamesNavigation } from 'next-intl/navigation';
import { notFound } from 'next/navigation';

/**
 * Current configuration of the application
 */
export const configuration = {
  locales: ['es', 'en'],
  defaultLocale: 'es',
  useLocale: () => useLocaleIntl(),
  usePathname: () => usePathname(),
  localePrefix: 'as-needed' as any
};

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales: configuration.locales });


/**
 * Get translator related to a specific section of the current locale
 */
export const getTranslations = useTranslations;

/**
 * Get all messages of a locale
 * @param locale - Locale to get messages
 */
export async function getMessages(locale: string) {
  try {
    return (await import(`../../messages/${locale}.json`)).default;
  }
  catch (error) {
    notFound();
  }
}

/**
 * Get translator related a locale
 * @param locale - Locale to get translator
 * @returns 
 */
export async function getTranslator(locale: string) {
  const
    messages = await getMessages(locale),
    translator = createTranslator({ locale, messages });

  return translator;
}