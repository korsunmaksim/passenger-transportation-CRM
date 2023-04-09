import React from "react";
import { BurgerMenu } from "../components/burger-menu/burget_menu.component";

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <BurgerMenu />
      {children}
    </>
  );
};
