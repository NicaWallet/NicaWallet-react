import React from "react";
import WelcomePage from "../WelcomePage";
import NavBar from "@/components/common/NavBar";

export default function LandingPage() {
  return (
    <>
      <NavBar />
      {/* TODO: Cambiar este componente por el componente propio de la landing Page posteriormente */}
      <WelcomePage />
    </>
  );
}
