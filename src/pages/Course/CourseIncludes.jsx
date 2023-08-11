import Heading from "../../components/Heading";
import CourseCard from "../../components/CourseCard";

import styles from "./CourseIncludes.module.css";

const CourseIncludes = () => {
  return (
    <div className={styles.container}>
      <Heading heading="This course includes" />
      <div className={styles.cardContainer}>
        <CourseCard text="Self paced - Pragmatic Topics" />
        <CourseCard text="Hands-on Practice Labs" />
        <CourseCard text="Certificate of Completion" />
      </div>
    </div>
  );
};

export default CourseIncludes;
