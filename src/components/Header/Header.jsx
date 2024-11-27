import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import s from "./Header.module.css";

const Header = () => {
  return (
    <>
      <header className={s.header}>
        <div>
          <Link to="/" className={s.logo}>
            Travel<span className={s.logoAccent}>Trucks</span>
          </Link>
        </div>
        <div>
          <Navigation />
        </div>
      </header>
    </>
  );
};

export default Header;
