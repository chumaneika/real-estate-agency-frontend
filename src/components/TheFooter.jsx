"use client";

import styles from "@/styles/TheFooter.module.css"
import { usePreferences } from "@/components/AppProviders";

const TheFooter = () => {
  const { t } = usePreferences();
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__inner}>
        <p>&copy; {new Date().getFullYear()} PrimeKey. {t("footer.rights")}</p>
        <div className={styles.links}>
          <a href="#" className={styles.link}>{t("footer.privacy")}</a>
          <a href="#" className={styles.link}>{t("footer.terms")}</a>
        </div>
      </div>
    </footer>
  );
};

export default TheFooter;
