import styles from "./BillingCounter.module.css";

function BillingCounters({ queues }) {
  return (
    <div className={styles.billingCounters}>
      {queues.map((queue, index) => (
        <div key={index} className="counter">
          <div>{`Counter C${index + 1}`}</div>
        </div>
      ))}
    </div>
  );
}

export default BillingCounters;
