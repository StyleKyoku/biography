import React from "react";
import styles from "./Education.module.scss";

export default function Education() {
  return (
    <main className={styles["main-edu"]}>
      <section className={styles["edu-intro"]}>
        <div className={styles["edu-intro-text"]}>
          <h1>Education</h1>
          <p>
            Studying Computer Science at Dublin City University — (DCU,
            Ireland's leading university for technology, innovation, and applied
            computing.)
          </p>
        </div>
        <div className={styles["edu-intro-img"]}>
          <img src="/assets/images/education/man.svg" alt="a man" />
        </div>
      </section>

      <section className={styles["about-uni"]}>
        <img
          src="/assets/images/education/university.svg"
          alt="University icon"
        />
        <h2>About the University</h2>
        <p>
          Dublin City University is known for its focus on innovation, research,
          and practical education in technology. The Computer Science program
          emphasizes real-world problem-solving, teamwork, and applied software
          development
        </p>
      </section>

      <section className={styles["edu-time-progress"]}>
        <div className={styles["progress"]}>
          <h3>Bachelor of Science in Computer Science, DCU</h3>
          <p>
            Courses: Web Development, Networks & Internet, Operating systems,
            Computer Systems, Software testing and etc
          </p>
          <img
            src="/assets/images/about-me/arch-linux.svg"
            alt="Arch-linux icon"
          />
        </div>
        <div className={styles["progress"]}>
          <h3>Meta Front-End Developer (Coursera)</h3>
          <p>
            Completed 8-course program focused on HTML, CSS, React, JS, version
            control, UI/UX and practise
          </p>
          <img src="/assets/images/about-me/react.svg" alt="React icon" />
        </div>
        <div className={styles["progress"]}>
          <h3>Projects & Experience</h3>
          <p>
            Built interactive apps. Main stack: JS, React JS, SCSS, git, vite.
            Some projects are made in a team with back-end (REST-APIs, Python,
            MySQL).
          </p>
          <img src="/assets/images/footer/github.svg" alt="GitHub icon" />
        </div>
      </section>
    </main>
  );
}
