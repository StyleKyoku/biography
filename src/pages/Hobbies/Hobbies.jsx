import styles from "./Hobbies.module.scss";

export default function Education() {
  return (
    <main className={styles["main-hobbies"]}>
      <section className={styles["hobby-intro"]}>
        <div className={styles["hobby-intro-text"]}>
          <h1>Hobbies</h1>
          <p>
            Outside of coding, I engage in various hobbies that help me relax
            and stay creative
          </p>
        </div>
        <div className={styles["spacer"]}></div>
      </section>

      <section className={styles["hobby-sec"]}>
        <div className={styles["hobby-list"]}>
          <div className={styles["hobby"]}>
            <img
              src={
                import.meta.env.BASE_URL + "/assets/images/hobbies/debate.svg"
              }
              alt="debate icon"
            />
            <h3>Debating</h3>
            <p>
              I actively participate in international university debates in the
              British Parliamentary format.
            </p>
            <p>
              Debating helps me improve my critical thinking, argumentation, and
              public speaking skills — as well as stay open to diverse
              perspectives and logical reasoning.
            </p>
          </div>
          <div className={styles["hobby"]}>
            <img
              src={
                import.meta.env.BASE_URL +
                "/assets/images/hobbies/traveling.svg"
              }
              alt="traveling icon"
            />
            <h3>Traveling</h3>
            <p>Exploring new places gives me energy and inspiration.</p>
            <p>
              Traveling allows me to discover different cultures, meet people
              from around the world, and broaden my worldview — something I try
              to reflect in both my studies and projects.
            </p>
          </div>
          <div className={styles["hobby"]}>
            <img
              src={
                import.meta.env.BASE_URL + "/assets/images/hobbies/games.svg"
              }
              alt="Games icon"
            />
            <h3>Strategic Games</h3>
            <p>
              I enjoy playing strategy-based games, which challenge me to think
              ahead, plan effectively, and make decisions under pressure.
            </p>
            <p>
              This hobby helps me strengthen analytical thinking and
              problem-solving — skills that are equally useful in software
              development.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
