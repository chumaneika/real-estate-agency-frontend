import styles from "@/styles/sections/HeroSection.module.css"
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.hero__inner}>
        <h1 className={styles.title}>What would you like to do?</h1>
        <div className={styles.actions}>
          <Link href="/properties" className={styles.card}>
            <h2>Buy Property 🏠</h2>
            <p>Find the perfect place for living or investment.</p>
          </Link>
          <div className={`${styles.card} ${styles.unavailable}`}>
            <h2>Sell Property 📤</h2>
            <p>Listing your property — coming soon.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
