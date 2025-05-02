import React from "react";
import "./NavLinks.scss";

const links = [
  { name: "Home", className: "nav__link", href: "/" },
  { name: "About us", className: "nav__link", href: "/about" },
  { name: "Projects", className: "nav__link", href: "/projects" },
  { name: "Contact us", className: "nav__contactUsLink", href: "/contact" },
];

export function NavLinks() {
  return (
    <nav className="nav">
      <ul className="nav__list">
        {links.map((link) => (
          <li key={link.name} className="nav__item">
            <a href={link.href} className={link.className}>
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
