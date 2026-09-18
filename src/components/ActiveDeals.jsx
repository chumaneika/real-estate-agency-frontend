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
    },
    {
      id: 102,
      property: "House in Tarki",
      client: "Zarema Gasanova",
      employee: "Amina Alieva",
      status: "Finalizing Documents",
    },
  ];

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Active Deals</h2>
      <div className={styles.dealsList}>
        {mockDeals.map((deal) => (
          <div key={deal.id} className={styles.card}>
            <h3 className={styles.property}>{deal.property}</h3>
            <p><strong>Клиент:</strong> {deal.client}</p>
            <p><strong>Риелтор:</strong> {deal.employee}</p>
            <p className={styles.status}><strong>Статус:</strong> {deal.status}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ActiveDeals;
