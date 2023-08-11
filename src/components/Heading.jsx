import styles from "./Heading.module.css";

const Heading = ({ heading }) => {
  return <span className={styles.heading}>{heading}</span>;
};

export default Heading;
