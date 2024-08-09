"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import React from "react";

interface ButtonNavigatorProps {
  route: string;
  translationKey: string;
  replace?: boolean;
}

/**
 * ButtonNavigator component.
 *
 * This component displays a button that navigates to a specific route.
 * It uses the `useTranslations` and `useRouter` hooks from "next-intl" and "next/navigation".
 * The button can be configured to replace the current route instead of pushing a new one.
 *
 * @param route - The route to navigate to.
 * @param translationKey - The key to use for the button text translation.
 * @param replace - Whether to replace the current route instead of pushing a new one.
 * @returns The ButtonNavigator component.
 */

const ButtonNavigator: React.FC<ButtonNavigatorProps> = ({
  route,
  translationKey,
  replace = false,
}) => {
  const router = useRouter();
  const t = useTranslations();

  const onClickHandler = () => {
    if (replace) {
      router.replace(route); // Reemplaza la ruta actual en lugar de hacer push
    } else {
      router.push(route);
    }
  };

  return <Button onClick={onClickHandler}>{t(translationKey)}</Button>;
};

export default ButtonNavigator;
