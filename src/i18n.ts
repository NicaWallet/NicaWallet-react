import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

// Lista de idiomas disponibles
const locales = ['en', 'es'];

export default getRequestConfig(async ({ locale }) => {
  // Validamos que el idioma solicitado exista en la lista de idiomas disponibles, sino existe retornamos un error 404
  if (!locales.includes(locale as any)) notFound();

  return {
    // Importamos los mensajes a partir del idioma solicitado
    messages: (await import(`../messages/${locale}.json`)).default
  };
});