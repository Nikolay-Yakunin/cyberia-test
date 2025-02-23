import React from "react";
import styles from "./Footer.module.css";
import { useNavigation } from "@/shared/hooks";
import { Logotype, Navigation } from "@/shared/ui";

export const Footer = () => {
  const { links, contactLinks } = useNavigation();

  return (
    <footer className={styles.footer}>
      <section className={styles.section}>
        <div className={styles.logo}>
          <Logotype size="big" className={styles.logotype} />
          <p>
            Веб-разработка и <br />
            усиление IT-команд
          </p>
        </div>
        <Navigation
          links={contactLinks.concat(links)}
          direction="vertical"
          className={styles.nav}
        />
      </section>
    </footer>
  );
};
