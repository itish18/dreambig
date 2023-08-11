import styles from "./Home.module.css";
import CustomerQueue from "./CustomerQueue";
import WaitingList from "./WaitingList";

const Home = ({ queues, waitingQueue, addCustomer }) => {
  return (
    <div className={styles.container}>
      <CustomerQueue queues={queues} />
      <WaitingList queue={waitingQueue} addCustomer={addCustomer} />
    </div>
  );
};

export default Home;
