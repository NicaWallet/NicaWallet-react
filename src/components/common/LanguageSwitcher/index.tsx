"use client";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
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
  const pathname = usePathname(); // Obtenemos la ruta actual del navegador con el hook usePathname
  const locale = useLocale(); // Obtenemos el idioma actual con el hook useLocale

  const changeLanguage = (lng: string) => {
    const newPathname = pathname.replace(`/${locale}`, `/${lng}`); // Reemplaza el idioma actual por el nuevo idioma
    router.push(newPathname); // Navega a la nueva ruta
  };

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
          .map((language) => (
            <DropdownMenuItem
              key={language.code} // Asigna el código del idioma como key del elemento
              onSelect={() => changeLanguage(language.code)} // Llama a la funcion changeLanguage y le pasa el valor del idioma seleccionado
            >
              {/* Muestra los idiomas disblobles despues del filtro, se tienen que mostrar dentro de llaves ya que es un texto variable  */}
              {language.label}
            </DropdownMenuItem>
          ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
