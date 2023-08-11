import styles from "./Reviews.module.css";

import Heading from "../../components/Heading";
import ReviewItem from "../../components/ReviewItem";

const Reviews = () => {
  return (
    <div className={styles.container}>
      <Heading heading="Reviews" />
      <div className={styles.reviewList}>
        <ReviewItem />
      </div>
      <div className={styles.buttonBox}>
        <button className={styles.prev}>Prev</button>
        <button className={styles.next}>Next</button>
      </div>
    </div>
  );
};

export default Reviews;
