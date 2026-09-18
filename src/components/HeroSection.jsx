import styles from "@/styles/sections/HeroSection.module.css"

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.hero__inner}>
        <h1 className={styles.title}>What would you like to do?</h1>
        <div className={styles.actions}>
          <a href="/properties/buy" className={styles.card}>
            <h2>Buy Property 🏠</h2>
            <p>Find the perfect place for living or investment.</p>
          </a>
          <a href="/properties/sell" className={styles.card}>
            <h2>Sell Property 📤</h2>
            <p>List your property and find serious buyers fast.</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
