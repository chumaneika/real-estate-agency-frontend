import HeroSection from "@/components/HeroSection"
import WhyChooseUs from "@/components/WhyChooseUs";
import RecentProperties from "@/components/RecentProperties";
import ActiveDeals from "@/components/ActiveDeals";
import EmployeesShowcase from "@/components/EmployeesShowcase";
import styles from "@/styles/pages/Home.module.css";

const Home = () => {
    return (
        <main className={styles.page}>
            <HeroSection />
            <WhyChooseUs />
            <RecentProperties />
            <ActiveDeals />
            <EmployeesShowcase />
        </main>
    )
}

export default Home;
