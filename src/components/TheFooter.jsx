import styles from "@/styles/TheFooter.module.css"

const TheFooter = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__inner}>
        <p>&copy; {new Date().getFullYear()} RealEstatePro. All rights reserved.</p>
        <div className={styles.links}>
          <a href="#" className={styles.link}>Privacy Policy</a>
          <a href="#" className={styles.link}>Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default TheFooter;
