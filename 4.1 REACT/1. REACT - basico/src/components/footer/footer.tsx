import React from "react";
import styles from "./footer.module.scss";

export const FooterCredits = () => {
  return (
    <footer className={styles.footer}>
      <h2 className={styles["footer-title"]}>Credits</h2>
      <p className={styles["footer-attribution"]}>
        Challenge by{" "}
        <a
          href="https://lemoncode.net/master-frontend#master-frontend/inicio"
          target="_blank"
          rel="noopener noreferrer"
        >
          LemonCode
        </a>
        . Coded by{" "}
        <a href="https://github.com/IncorrigibleSpirit" target="_blank" rel="noopener noreferrer">
          Carlos Pizarro
        </a>
        .
      </p>
      <ul className={styles["footer-list"]}>
        <li>
          “Flat splash / Grid wave backgrounds” by{" "}
          <a href="https://themefire.pro/" target="_blank" rel="noopener noreferrer">
            themefire.pro
          </a>
          , under{" "}
          <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">
            CC BY 4.0
          </a>
          .
        </li>
      </ul>
    </footer>
  );
};
