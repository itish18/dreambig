import styles from "./WaitingList.module.css";

const WaitingList = ({ queue, addCustomer }) => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>Waiting</div>
      <div className={styles.list}>
        {queue.map((cust, index) => (
          <span key={index}>{cust}</span>
        ))}
      </div>
      {/* <button className={styles.addButton} onClick={addCustomer}>
        Add
      </button> */}
    </div>
  );
};

export default WaitingList;
