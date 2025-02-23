import React, { HTMLAttributes } from "react";
import styles from "./Navigation.module.css";
import { Link } from "react-router";
import { LinkType } from "@/shared/hooks/UseNavigation";

interface NavigationProps extends HTMLAttributes<HTMLElement> {
  links: LinkType[];
  direction: "horizontal" | "vertical";
}

export const Navigation = ({ links, direction, ...rest }: NavigationProps) => {
  return (
    <nav className={styles.nav} {...rest}>
      <ul
        className={`${styles.list} ${direction === "horizontal" ? styles.horizontal : styles.vertical}`}
      >
        {links?.map((link) => (
          <li key={link.href} className={styles.item}>
            <Link to={link.href} className={styles.link}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
