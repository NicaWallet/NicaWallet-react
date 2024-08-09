"use client";

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"; // Ajusta la ruta según tu estructura
import LanguageSwitcher from "@/components/common/LanguageSwitcher";
import { useTranslations } from "next-intl";
import React from "react";
import { Button } from "../../ui/button";
import ButtonNavigator from "../ButtonNavigator";

/**
 * Represents a navigation bar component.
 * This component displays a navigation menu with links to different pages,
 * a language switcher, and a login button.
 */

export default function NavBar() {
  const t = useTranslations(); // Aquí obtenemos el hook de traducción

  return (
    <div>
      {/* Navigation Menu es el componente contenedor del navBar */}
      <NavigationMenu className="absolute top-0 right-0 p-4">
        {/* NavigationMenuList es el componente que contiene los items del navBar */}
        <NavigationMenuList className="flex items-center space-x-4">
          {/* Home */}
          <NavigationMenuItem>
            {/* NavigationMenuLink es un componente para mostrar su contenido como un link */}
            <NavigationMenuLink href="/">
              <Button size={"sm"} type="button" variant={"link"}>
                {t("HOME")}
              </Button>
            </NavigationMenuLink>
          </NavigationMenuItem>

          {/* About */}
          <NavigationMenuItem>
            <NavigationMenuLink href="/about">
              <Button size={"sm"} type="button" variant={"link"}>
                {t("ABOUT")}
              </Button>
            </NavigationMenuLink>
          </NavigationMenuItem>

          {/* Contact */}
          <NavigationMenuItem>
            <NavigationMenuLink href="/es/login">
              <Button size={"sm"} type="button" variant={"link"}>
                {t("CONTACT")}
              </Button>
            </NavigationMenuLink>
          </NavigationMenuItem>

          {/* Language Switcher */}
          <NavigationMenuItem>
            {/* Mandamos a llamar el componente LanguageSwitcher dentro del menu item para poder mostrarlo dentro del navBar */}
            <LanguageSwitcher />
          </NavigationMenuItem>

          {/* Login Button */}
          <NavigationMenuItem>
            <ButtonNavigator route="/es/login" translationKey="LOGIN" />
          </NavigationMenuItem>

          {/* Register Button
          <NavigationMenuItem>
            <Button size={"sm"} type="button" variant={"default"}>
              {t("REGISTER")}
            </Button>
          </NavigationMenuItem> */}
        </NavigationMenuList>
        <NavigationMenuIndicator />
        <NavigationMenuViewport />
      </NavigationMenu>
    </div>
  );
}
