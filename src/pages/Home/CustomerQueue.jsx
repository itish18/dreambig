import styles from "./CustomerQueue.module.css";

import { Link } from "react-router-dom";

function CustomerQueue({ queues }) {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.heading}>Counter</div>
        <div className={styles.customerQueue}>
          {queues.map((queue, index) => (
            <div key={index} className={styles.box}>
              <span className={styles.counter}>C{index + 1}</span>
              {queue.map((customer, idx) => (
                <span key={idx} className={styles.items}>
                  {customer}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.urlBox}>
        <Link className={styles.url} to="/course">
          Course
        </Link>
      </div>
    </div>
  );
}

export default CustomerQueue;
