"use client";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { usePathname } from "@/lib/translations";
import { useTranslations, useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { TiWorldOutline } from "react-icons/ti";

/**
 * LanguageSwitcher component.
 *
 * This component displays a dropdown menu for selecting the language.
 * It uses the `useTranslations`, `useRouter`, `usePathname`, and `useLocale` hooks from "next/navigation" and "next-intl".
 * The selected language can be changed by clicking on the available language options.
 *
 * @returns The LanguageSwitcher component.
 */

export default function LanguageSwitcher() {
  const t = useTranslations(); // Obtenemos la función t para traducir el texto
  const router = useRouter(); // creamos una variable router para usar el hook useRouter y poder navegar entre rutas
  const pathname = usePathname(); // Obtenemos la ruta actual con el hook usePathname
  const locale = useLocale(); // Obtenemos el idioma actual con el hook useLocale
  const startTransition = useTransition()[1]; // Obtenemos la función startTransition para realizar transiciones de forma suave y seleccionamos el segundo elemento del array que retorna useTransition 

  function Action({
    index,
    text,
    locale,
  }: {
    index: number;
    text: string;
    locale: string;
  }) {
    return (
      <DropdownMenuItem
        key={`menu-item-${index}`}
        onClick={() =>
          startTransition(() => router.replace(`/${locale}${pathname}`))
        }
      >
        {text}
      </DropdownMenuItem>
    );
  }

  // Lista de idiomas disponibles
  const languages = [
    { code: "en", label: t("ENGLISH") },
    { code: "es", label: t("SPANISH") },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className="px-4 py-2 bg-blue-500 text-white rounded flex items-center space-x-2"
        type="button"
      >
        <TiWorldOutline />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {languages
          .filter((language) => language.code !== locale) // Realiza un filtro para mostrar solo los idiomas diferentes al idioma actual seleccionado
          .map((language, index) => (
            <Action
              key={index}
              index={index}
              text={language.label}
              locale={language.code}
            />
          ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
