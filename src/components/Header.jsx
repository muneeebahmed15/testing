import { useState } from "react";
import { SITE } from "../data/products";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "#shop", label: "Shop" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="header">
      <div className="header__inner">
        <a href="#top" className="header__logo" onClick={() => setMenuOpen(false)}>
          {SITE.name}
        </a>

        <nav className="header__nav header__nav--desktop">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <button
          className="header__toggle"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className={`header__toggle-bar ${menuOpen ? "header__toggle-bar--open" : ""}`} />
        </button>
      </div>

      {menuOpen && (
        <nav className="header__nav header__nav--mobile">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
