import React from "react";
import styles from "./HomePage.module.scss";

import htmlLogo from "/assets/images/about-me/html.svg";
import cssLogo from "/assets/images/about-me/css.svg";
import jsLogo from "/assets/images/about-me/js.svg";
import reactLogo from "/assets/images/about-me/react.svg";
import sassLogo from "/assets/images/about-me/sass.svg";
import viteLogo from "/assets/images/about-me/vite.svg";
import gitLogo from "/assets/images/about-me/git.svg";
import archLogo from "/assets/images/about-me/arch-linux.svg";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

export default function HomePage() {
  const logos = [
    { id: "html", src: htmlLogo, alt: "HTML logo" },
    { id: "css", src: cssLogo, alt: "CSS logo" },
    { id: "js", src: jsLogo, alt: "JavaScript logo" },
    { id: "react", src: reactLogo, alt: "React logo" },
    { id: "sass", src: sassLogo, alt: "Sass logo" },
    { id: "vite", src: viteLogo, alt: "Vite logo" },
    { id: "git", src: gitLogo, alt: "Git logo" },
    { id: "arch", src: archLogo, alt: "Arch Linux logo" },
  ];
  return (
    <main className={styles["about-main"]}>
      <section className={styles["about-me"]}>
        <div className={styles["main-sec"]}>
          <div className={styles["main-sec-text"]}>
            <h1>About Me</h1>
            <p>
              I’m a front-end developer passionate about creating clean,
              responsive, and user-friendly web interfaces. I work with HTML,
              CSS, JavaScript, React, SCSS, Vite, and Git, and enjoy building
              fast, maintainable projects on Arch Linux.
            </p>
            <p>
              I’m currently studying Computer Science at Dublin City University
              (DCU), where I continue developing my technical and
              problem-solving skills through hands-on projects.
            </p>
          </div>
          <div className={styles["main-sec-img"]}>
            <img
              src="/assets/images/about-me/Nikita-Zhdanov.JPG"
              alt="Nikita Zhdanov"
              className={styles["profile-image"]}
            />
            <div className={styles["main-sec-buttons-list"]}>
              <button className={styles["main-sec-button"]}>Contact me</button>
              <button className={styles["main-sec-button"]}>Download CV</button>
            </div>
          </div>
        </div>
      </section>
      <section className={styles["skills-container"]}>
        <div className={styles["skills-sec"]}>
          <h2 className={styles["skills-title"]}>Skills</h2>
          <Splide
            options={{
              type: "loop",
              gap: "24px",
              perPage: 4,
              arrows: false,
              pagination: false,
              drag: false,
              clones: 12,
              autoScroll: {
                speed: 0.7,
                pauseOnHover: false,
                pauseOnFocus: false,
              },
            }}
            extensions={{ AutoScroll }}
            aria-label="Skills"
          >
            {logos.map((it) => (
              <SplideSlide key={it.id}>
                <img
                  src={it.src}
                  alt={it.alt}
                  loading="lazy"
                  decoding="async"
                />
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </section>
    </main>
  );
}
