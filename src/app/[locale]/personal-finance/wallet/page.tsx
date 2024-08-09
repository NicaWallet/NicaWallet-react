import ButtonNavigator from "@/components/common/ButtonNavigator";
import NavBar from "@/components/common/NavBar";
import React from "react";

const wallet = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 gap-4">
      <NavBar />

      <h1>Wallet</h1>
      <p>
        Welcome to your wallet. From here, you can navigate to other sections.
      </p>

      <ButtonNavigator
        route="/es/personal-finance"
        translationKey="GO_TO_PERSONAL_FINANCE_BUTTON"
        replace={true}
      />
    </div>
  );
};

export default wallet;
