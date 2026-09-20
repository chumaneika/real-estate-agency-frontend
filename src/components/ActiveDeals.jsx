import { BriefcaseBusiness, UserRound } from "lucide-react";
import styles from "@/styles/sections/ActiveDeals.module.css";

const ActiveDeals = () => {
  // Future logic to fetch active deals from the backend
  // const [deals, setDeals] = useState([]);
  // useEffect(() => { fetchActiveDeals().then(setDeals); }, []);

  // Temporary plugs
  const mockDeals = [
    {
      id: 101,
      property: "Apartment on Imam Shamil Avenue",
      client: "Magomed Magomedov",
      employee: "Rashid Aliev",
      status: "In Progress",
      statusKey: "progress",
    },
    {
      id: 102,
      property: "House in Tarki",
      client: "Zarema Gasanova",
      employee: "Amina Alieva",
      status: "Finalizing Documents",
      statusKey: "finalizing",
    },
  ];

  return (
    <section className={styles.container}>
      <div className={styles.heading}>
        <p className={styles.eyebrow}>CURRENT ACTIVITY</p>
        <h2 className={styles.title}>Active Deals</h2>
        <p className={styles.subtitle}>A clear view of the transactions currently moving forward.</p>
      </div>
      <div className={styles.dealsList}>
        {mockDeals.map((deal) => (
          <article key={deal.id} className={styles.card}>
            <div className={styles.cardHeader}>
              <span className={styles.reference}>Deal #{deal.id}</span>
              <span className={`${styles.status} ${styles[deal.statusKey]}`}><i aria-hidden="true" />{deal.status}</span>
            </div>
            <h3 className={styles.property}>{deal.property}</h3>
            <dl className={styles.people}>
              <div>
                <dt><UserRound size={16} aria-hidden="true" />Client</dt>
                <dd>{deal.client}</dd>
              </div>
              <div>
                <dt><BriefcaseBusiness size={16} aria-hidden="true" />Agent</dt>
                <dd>{deal.employee}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ActiveDeals;
