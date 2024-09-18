import { NavLink } from "react-router-dom";
import clsx from "clsx";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <ul className={styles.navList}>
      <li>
        <NavLink
          to="/"
          className={(props) => {
            return clsx(styles.link, props.isActive && styles.active);
          }}
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/movies"
          className={(props) => {
            return clsx(styles.link, props.isActive && styles.active);
          }}
        >
          Movies
        </NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
