import React from "react";
import { Logo } from "./Logo";
import { NavLinks } from "./NavLinks";
import "./Header.scss";

export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <Logo />
        <NavLinks />
      </div>
    </header>
  );
}
