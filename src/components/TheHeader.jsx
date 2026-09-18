import styles from "@/styles/TheHeader.module.css";
import { Home } from "lucide-react";

const TheHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__inner}>
        <div className={styles.logo}>
          <Home size={22} />
          PrimeKey
        </div>
        <nav className={styles.nav}>
          <a href="#" className={styles.nav__link}>Home</a>
          <a href="#" className={styles.nav__link}>Properties</a>
          <a href="#" className={styles.nav__link}>Agents</a>
          <a href="#" className={styles.nav__link}>Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default TheHeader;
