import s from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <>
      <div className={s.notFoundPage}>
        <h2>Oops! Something went wrong...</h2>
        <h3 className={s.subtitle}>Page not found. Try again</h3>
      </div>
    </>
  );
};

export default NotFoundPage;
