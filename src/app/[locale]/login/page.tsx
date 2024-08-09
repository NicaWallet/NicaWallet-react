import NavBar from "@/components/common/NavBar";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import React from "react";
import { useTranslations } from "next-intl";

const LogIn = () => {
  const t = useTranslations();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 gap-4 w-full">
      <NavBar />

      <div className="flex justify-center">
        <h1>Login title</h1>
      </div>
      <form className="flex flex-col gap-4 w-1/2 border-4	border-black border-double p-4">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="email">{t("EMAIL_LABEL")}</Label>
          <Input type="email" id="email" placeholder={t("EMAIL_PLACEHOLDER")} />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="password">{t("PASSWORD_LABEL")}</Label>
          <Input
            type="password"
            id="password"
            placeholder={t("PASSWORD_PLACEHOLDER")}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LogIn;
