import { useState } from "react";
import styles from "./CourseContentItem.module.css";

const CourseContentItem = ({ title, contentList }) => {
  const [showList, setShowList] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.titleBox} onClick={() => setShowList(!showList)}>
        <span>{title}</span>
        <i class="fa-solid fa-chevron-down"></i>
      </div>

      {showList && (
        <>
          <div className={styles.line} />
          <ul className={styles.list}>
            {contentList.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default CourseContentItem;
