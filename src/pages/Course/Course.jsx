import styles from "./Course.module.css";

import CourseContent from "./CourseContent";
import Heading from "../../components/Heading";
import CourseIncludes from "./CourseIncludes";
import Reviews from "./Reviews";

const Course = () => {
  return (
    <>
      <nav className={styles.navBar}>
        <div className={styles.navHeading}>
          <span>CYBER</span>YAMI<span></span>
        </div>
        <ul className={styles.linkList}>
          <li className={styles.linkOne}>CTF Warriors</li>
          <li className={styles.linkTwo}>Business Solutions</li>
        </ul>
        <ul className={styles.btnList}>
          <button className={styles.signBtn}>Sign Up</button>
          <button className={styles.loginBtn}>Login</button>
        </ul>
      </nav>
      <main className={styles.main}>
        <div className={styles.container}>
          <section className={styles.overview}>
            <div className={styles.miniBox}>
              <div className={styles.leftSide}>
                <div className={styles.leftBox}>
                  <span className={styles.smallTitle}>Skillup</span>
                  <div className={styles.details}>
                    <div className={styles.title}>Burpsuite Bootcamp</div>
                    <div className={styles.desc}>
                      BurpSuite is an all-in-one tool used for WAPT. There are
                      various functions that the burp suite can perform that
                      help one in the process of pen-testing a website. We can
                      intercept traffic, such as requests and responses sent to
                      web servers, and also perform various analyses on those
                      requests. BurpSuite is used by professionals in the field
                      of testing security for websites. BurpSuite comes in 2
                      versions: professional, a paid product, and the free,
                      Community edition.
                    </div>
                    <div className={styles.rating}>
                      <i class="fa-solid fa-star"></i> 5
                    </div>
                  </div>
                  <button className={styles.loginButton}>
                    Login To Enroll
                  </button>
                  <div className={styles.minorDetails}>
                    <span>
                      <i class="fa-solid fa-thumbs-up"></i> Beginner
                    </span>
                    <span className={styles.gapLine} />
                    <span>
                      <i class="fa-solid fa-user"></i> 37 Enrolled Students
                    </span>
                  </div>
                </div>
                <div className={styles.content}>
                  <div className={styles.leftContent}>
                    <Heading heading="Overview" />
                    <p className={styles.overviewContent}>
                      Burpsuite bootcamp brings you a detailed, structured way
                      of learning and practicing this tool. This tool is highly
                      used in the industry and mainly is used for conducting
                      WAPT i.e Web Application Penetration Testing. You will
                      learn about every aspect and sub-tools included in the
                      burp suite included in this bootcamp are practice labs to
                      get your hands on the burp suite and theory lectures with
                      interactive video demonstrations.
                    </p>
                  </div>
                  <CourseContent />
                </div>
              </div>
              <div className={styles.rightSidePrice}>
                <div className={styles.skillBox}>
                  <Heading heading="Top skills you will learn" />
                  <ul className={styles.skillList}>
                    <li>
                      <i class="fa-solid fa-circle-check"></i> Understanding of
                      Burpsuite
                    </li>
                    <li>
                      <i class="fa-solid fa-circle-check"></i> Know the tools
                      offered by the burp suite
                    </li>
                    <li>
                      <i class="fa-solid fa-circle-check"></i> Use burp suite
                      with ease in your testing
                    </li>
                    <li>
                      <i class="fa-solid fa-circle-check"></i> Know the
                      difference between the pro & free edition
                    </li>
                    <li>
                      <i class="fa-solid fa-circle-check"></i> Perform
                      full-fledged WAPT using only BurpSuite
                    </li>
                    <li>
                      <i class="fa-solid fa-circle-check"></i> Learn Real-world
                      techniques
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <section className={styles.courseSection}>
            <CourseIncludes />
          </section>
          <section className={styles.reviewSection}>
            <Reviews />
          </section>
        </div>
      </main>
    </>
  );
};

export default Course;
