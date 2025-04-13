import React from "react";
import logoHeader from "/assets/logo_header_white.svg";
import classes from "./header.component.module.css";
import { userProfileContext } from "@/core/profile";

export const HeaderComponent: React.FC = () => {
  const { userName } = userProfileContext();

  return (
    <header className={classes.header}>
      <div>
        <img src={logoHeader} className={classes.headerLogo} alt="" />
        <div className={classes.usuario}>
          <p>{userName}</p>
        </div>
      </div>
    </header>
  );
};
