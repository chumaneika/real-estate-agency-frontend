import styles from "@/styles/sections/WhyChooseUs.module.css";

const WhyChooseUs = () => {
  return (
    <section className={styles.why}>
      <div className={styles.why__inner}>
        <h2 className={styles.title}>Why Choose Our Platform?</h2>
        <div className={styles.features}>
          <div className={styles.feature}>
            <span className={styles.icon}>⚡</span>
            <h3>Fast Deal Management</h3>
            <p>Create, edit, and track deals in just a few clicks.</p>
          </div>
          <div className={styles.feature}>
            <span className={styles.icon}>🔎</span>
            <h3>Smart Property Search</h3>
            <p>Filter listings by price, size, owner, and more.</p>
          </div>
          <div className={styles.feature}>
            <span className={styles.icon}>🔒</span>
            <h3>Secure & Reliable</h3>
            <p>Built on trusted technologies like Spring and Next.js.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
