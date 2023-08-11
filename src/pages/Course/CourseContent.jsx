import CourseContentItem from "../../components/CourseContentItem";
import Heading from "../../components/Heading";
import styles from "./CourseContent.module.css";

import { courseContentList } from "../../data";

const CourseContent = () => {
  return (
    <div className={styles.container}>
      <Heading heading="Course Content" />
      <div className={styles.listContainer}>
        {courseContentList.map((item, index) => (
          <CourseContentItem
            key={index}
            title={item.title}
            contentList={item.list}
          />
        ))}
      </div>
    </div>
  );
};

export default CourseContent;
