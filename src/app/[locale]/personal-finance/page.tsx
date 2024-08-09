import ButtonNavigator from "@/components/common/ButtonNavigator";
import NavBar from "@/components/common/NavBar";
import React from "react";

const personalFinance = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 gap-4">
      <NavBar />
      <h1>Dashboard</h1>
      <p>
        Welcome to your dashboard. From here, you can navigate to other
        sections.
      </p>

      <ButtonNavigator
        route="/es/personal-finance/wallet"
        translationKey="GO_TO_WALLET_BUTTON"
      />
    </div>
  );
};

export default personalFinance;
