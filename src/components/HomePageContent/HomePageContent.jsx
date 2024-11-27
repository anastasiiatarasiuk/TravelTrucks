import { Link } from "react-router-dom";
import s from "./HomePageContent.module.css";

const HomePageContent = () => {
  return (
    <>
      <div className={s.contentContainer}>
        <div className={s.textContainer}>
          <h1 className={s.title}>Campers of your dreams</h1>
          <h2 className={s.subtitle}>
            You can find everything you want in our catalog
          </h2>
          <Link className={s.viewNowBtn} to="/catalog">
            View Now
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomePageContent;
