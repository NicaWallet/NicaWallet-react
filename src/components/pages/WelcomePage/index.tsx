import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import React from "react";

export default function WelcomePage() {
  const t = useTranslations(); // Aquí obtenemos el hook de traducción

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white">
            {t("LANDING_TITLE")}
          </h1>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            {t("LANDING_SUBTITLE")}
          </p>
          <Button className="mt-8">{t("LANDING_CTA")}</Button>{" "}
        </div>
      </div>
    </>
  );
}
