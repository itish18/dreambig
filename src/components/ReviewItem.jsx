import styles from "./ReviewItem.module.css";

const ReviewItem = () => {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <img
          src="https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="userImage"
        />
        <div className={styles.userDetails}>
          <span className={styles.username}>Vishal Naik</span>
          <span>
            <i class="fa-solid fa-star"></i> 5
          </span>
        </div>
      </div>
      <span className={styles.text}>Awsome bootcamp like very much</span>
    </div>
  );
};

export default ReviewItem;
