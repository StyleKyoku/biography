import React from "react";

import styles from "./Modal.module.scss";

import closeIcon from "/assets/images/modal/close.svg";

function useAutoClose(active, setActive, refs) {
  React.useEffect(() => {
    if (!active) return;

    const handleClick = (e) => {
      const clickedInside = refs.some(
        (ref) => ref.current && ref.current.contains(e.target),
      );
      if (!clickedInside) setActive(false);
    };

    const handleScroll = () => setActive(false);

    const onKey = (e) => {
      if (e.key == "Escape") setActive(false);
    };

    document.addEventListener("mousedown", handleClick);
    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("keydown", onKey);

    return () => {
      document.removeEventListener("mousedown", handleClick);
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("keydown", onKey);
    };
  }, [active, setActive, refs]);
}

export default function Modal({ isOpen, setOpen }) {
  const modalRef = React.useRef(null);
  const triggerRef = React.useRef(null);
  const modalRefs = React.useMemo(() => [modalRef, triggerRef], []);

  useAutoClose(isOpen, setOpen, modalRefs);
  return (
    <section className={`${styles["modal"]} ${isOpen ? styles["open"] : ""}`}>
      <div ref={modalRef} className={styles["modal-box"]}>
        <button
          className={styles["close-button"]}
          onClick={() => setOpen((v) => !v)}
          ref={triggerRef}
        >
          <img src={closeIcon} alt="close icon" />
        </button>

        <h1> Contacts </h1>

        <div className={styles["contacts-list"]}>
          <div className={styles["contact"]}>
            <div className={styles["contact-title"]}>
              <img
                src={
                  import.meta.env.BASE_URL + "/assets/images/footer/github.svg"
                }
                alt="github icon"
              />
              <h2>GitHub</h2>
            </div>
            <a href="https://github.com/StyleKyoku">
              <button className={styles["contact-button"]}>StyleKyoku</button>
            </a>
          </div>

          <div className={styles["contact"]}>
            <div className={styles["contact-title"]}>
              <img
                src={
                  import.meta.env.BASE_URL +
                  "/assets/images/footer/telegram.svg"
                }
                alt="github icon"
              />
              <h2>Telegram</h2>
            </div>
            <a href="https://t.me/stylekyoku">
              <button className={styles["contact-button"]}>@stylekyoku</button>
            </a>
          </div>

          <div className={styles["contact"]}>
            <div className={styles["contact-title"]}>
              <img
                src={
                  import.meta.env.BASE_URL + "/assets/images/footer/email.svg"
                }
                alt="email icon"
              />
              <h2>Gmail</h2>
            </div>
            <a>
              <button
                className={styles["contact-button"]}
                onClick={() => {
                  const to = "nikita.zhdanov.ie@gmail.com";
                  const subject = encodeURIComponent("Visited your bio");
                  const body = encodeURIComponent(
                    "Hello, Nikita,\n\n Hope you are doing well. I saw your portfolio...",
                  );
                  window.open(`mailto:${to}?subject=${subject}&body=${body}`);
                }}
              >
                nikita.zhdanov.ie
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
