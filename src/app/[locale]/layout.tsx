import { NextIntlClientProvider } from "next-intl";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NicaWallet", // Esto de aca es el titulo que se va a mostrar en la pestaña del navegador
  description: "NicaWallet Page",
};

/**
 * RootLayout component is responsible for rendering the layout of the application.
 * It sets the language locale, imports the corresponding messages, and provides them to the child components.
 *
 * @param children - The child components to be rendered within the layout.
 * @param params - An object containing the locale parameter.
 * @param params.locale - The selected language locale.
 * @returns The rendered layout with the specified language locale and messages.
 */

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Definimos una variable mensajes que va a contener los mensajes en el idioma seleccionado
  const messages = (await import(`../../../messages/${locale}.json`)).default;

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
