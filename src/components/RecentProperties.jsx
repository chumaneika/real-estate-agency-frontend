import styles from "@/styles/sections/RecentProperties.module.css"

const RecentProperties = () => {
    // Future logic to fetch recent properties from the backend
  // const [properties, setProperties] = useState([]);
  // useEffect(() => { fetchRecentProperties().then(setProperties); }, []);

  // Temporary plugs
  const mockProperties = [
    {
      id: 1,
      title: "Modern Apartment in Downtown",
      location: "City Center",
      price: "$120,000",
    },
    {
      id: 2,
      title: "Cozy House in the Suburbs",
      location: "Green Valley",
      price: "$210,000",
    },
    {
      id: 3,
      title: "Luxury Penthouse with Sea View",
      location: "Coastal Area",
      price: "$950,000",
    },
  ];

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Recent Properties</h2>
      <div className={styles.grid}>
        {mockProperties.map((property) => (
          <div key={property.id} className={styles.card}>
            <img src={property.image} alt={property.title} className={styles.image} />
            <div className={styles.info}>
              <h3 className={styles.name}>{property.title}</h3>
              <p className={styles.address}>{property.address}</p>
              <div className={styles.meta}>
                <span>{property.area} м²</span>
                <span>{property.rooms} комн.</span>
              </div>
              <p className={styles.price}>{property.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default RecentProperties;