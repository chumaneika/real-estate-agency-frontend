import styles from "@/styles/sections/EmployeeShowcase.module.css";

const EmployeesShowcase = () => {
  // Future logic to fetch employees from backend
  // const [employees, setEmployees] = useState([]);
  // useEffect(() => { fetchEmployees().then(setEmployees); }, []);

  const mockEmployees = [
    {
      id: 1,
      name: "Amina Alieva",
      position: "Senior Agent",
      experience: 6,
    },
    {
      id: 2,
      name: "Rashid Aliev",
      position: "Real Estate Consultant",
      experience: 4,
    },
    {
      id: 3,
      name: "Leila Magomedova",
      position: "Junior Agent",
      experience: 2,
    },
  ];

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Meet Our Agents</h2>
      <div className={styles.grid}>
        {mockEmployees.map((employee) => (
          <div key={employee.id} className={styles.card}>
            <h3>{employee.name}</h3>
            <p>Position: {employee.position}</p>
            <p>Experience: {employee.experience} years</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EmployeesShowcase;
