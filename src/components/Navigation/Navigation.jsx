import { NavLink } from "react-router-dom";
import clsx from "clsx";
import s from "./Navigation.module.css";

const Navigation = () => {
  const navigationLink = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };

  return (
    <div>
      <nav>
        <ul className={s.navigationLinksList}>
          <li>
            <NavLink to="/" className={navigationLink}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/catalog" className={navigationLink}>
              Catalog
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
