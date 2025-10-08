import React from "react";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles["footer"]}>
      <div className={styles["footer-desc"]}>
        <h2 className={styles["footer-desc-title"]}>Contact Information</h2>
        <p className={styles["footer-desc-text"]}>
          I am open to collaborations, part-time internship or employment
          opportunities
        </p>
      </div>
      <div className={styles["footer-desc"]}>
        <div className={styles["footer-links-div"]}>
          <img
            src={import.meta.env.BASE_URL + "/assets/images/footer/github.svg"}
            alt="GitHub"
            className={styles["footer-icon"]}
          />
          <a
            href="https://github.com/StyleKyoku"
            className={styles["footer-link"]}
          >
            <b>GitHub:</b> StyleKyoku
          </a>
        </div>
        <div className={styles["footer-links-div"]}>
          <img
            src={
              import.meta.env.BASE_URL + "/assets/images/footer/telegram.svg"
            }
            alt="Telegram"
            className={styles["footer-icon"]}
          />
          <a href="https://t.me/stylekyoku" className={styles["footer-link"]}>
            <b>Telegram:</b> @stylekyoku
          </a>
        </div>
        <div className={styles["footer-links-div"]}>
          <img
            src={import.meta.env.BASE_URL + "/assets/images/footer/email.svg"}
            alt="Email"
            className={styles["footer-icon"]}
          />
          <a href="" className={styles["footer-link"]}>
            <b>Email:</b> nikita.zhdanov.ie@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}
