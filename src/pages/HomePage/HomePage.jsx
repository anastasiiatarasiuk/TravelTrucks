import HomePageContent from "../../components/HomePageContent/HomePageContent";
import s from "./HomePage.module.css";

const HomePage = () => {
  return (
    <>
      <section className={s.container}>
        <HomePageContent />
      </section>
    </>
  );
};

export default HomePage;
