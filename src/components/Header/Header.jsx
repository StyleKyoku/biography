import React from "react";
import styles from "./Header.module.scss";

import burgerIcon from "/assets/images/header/burger.svg";
import { Link, NavLink } from "react-router-dom";

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

    document.addEventListener("mousedown", handleClick);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      document.removeEventListener("mousedown", handleClick);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [active, setActive, refs]);
}

const Header = () => {
  const [burgerActive, setBurgerActive] = React.useState(false);

  const navRef = React.useRef(null);
  const burgerRef = React.useRef(null);

  const burgerRefs = React.useMemo(() => [navRef, burgerRef], []);

  useAutoClose(burgerActive, setBurgerActive, burgerRefs);

  return (
    <header className={styles["header"]}>
      {/* Бургер */}
      <button
        className={styles["burger-button"]}
        ref={burgerRef}
        onClick={() => setBurgerActive((v) => !v)}
      >
        <img src={burgerIcon} alt="Menu" className={styles["burger-icon"]} />
      </button>

      <Link to="/">
        <h1 className={styles["header-logo"]}>Nikita Zhdanov</h1>
      </Link>

      <nav
        ref={navRef}
        className={`${styles["header-nav"]} ${burgerActive ? styles["active"] : ""}`}
      >
        <ul className={styles["header-menu"]}>
          <li>
            <NavLink to="/">About</NavLink>
          </li>
          <li>
            <NavLink to="/education"> Education</NavLink>
          </li>
          <li>
            <NavLink to="/hobbies"> Hobbies</NavLink>
          </li>
          <li>
            <NavLink to="/favourite-meals"> Favourite Meals</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
