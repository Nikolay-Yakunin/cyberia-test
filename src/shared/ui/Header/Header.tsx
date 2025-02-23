import React, { useState } from "react";
import styles from "./Header.module.css";
import { Logotype, Navigation } from "@/shared/ui";
import { useNavigation } from "@/shared/hooks/UseNavigation";
import BurgerMenuOpen from "@/assets/Menu-burger.svg";
import BurgerMenuClose from "@/assets/Menu-burger_close.svg";
import { Link } from "react-router";

export const Header: React.FC = () => {
  const { links, contactLinks } = useNavigation();
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const handleBurgerOpen = () => setIsBurgerOpen(true);
  const handleBurgerClose = () => setIsBurgerOpen(false);

  return (
    <header className={styles.header}>
      <section className={styles.section}>
        <Logotype size="small" className={styles.logo} />
        <Navigation
          links={links}
          direction="horizontal"
          className={styles.navdesktop}
        />
        <div className={styles.burger}>
          {isBurgerOpen ? (
            <div className={styles.burgerMenu}>
              <img
                src={BurgerMenuClose}
                alt="Close menu"
                onClick={handleBurgerClose}
                className={styles.burgerIcon}
              />
              <nav className={styles.nav}>
                {links.map((link) => (
                  <Link key={link.href} className={styles.link} to={link.href}>
                    {link.label}
                  </Link>
                ))}
                <div className={styles.line} />
                <h1 className={styles.contacts}>Контакты:</h1>
                {contactLinks.map((link) => (
                  <Link
                    key={link.href}
                    className={styles.contact}
                    to={link.href}
                    target="_blank"
                  >
                    {link.label}
                  </Link>
                ))}
                <div className={styles.line} />
              </nav>
            </div>
          ) : (
            <img
              src={BurgerMenuOpen}
              alt="Menu open"
              onClick={handleBurgerOpen}
              className={styles.burgerIcon}
            />
          )}
        </div>
      </section>
    </header>
  );
};
