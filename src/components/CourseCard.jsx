import styles from "./CourseCard.module.css";

const CourseCard = ({ text }) => {
  return <div className={styles.container}>{text}</div>;
};

export default CourseCard;
