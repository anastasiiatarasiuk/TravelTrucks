import { useSelector } from "react-redux";
import s from "./CamperReviews.module.css";
import { selectTruck } from "../../redux/trucks/selectors";
import sprite from "/icons/sprite.svg";
import ClientForm from "../ClientForm/ClientForm";
import { nanoid } from "nanoid";

const CamperReviews = () => {
  const truck = useSelector(selectTruck);
  const totalStars = 5;
  return (
    <div className={s.review}>
      <ul className={s.list}>
        {truck.reviews.length === 0 ? (
          <p>Sorry, there are no reviews!</p>
        ) : (
          truck.reviews.map((item) => (
            <li className={s.reviewerItem} key={nanoid()}>
              <div className={s.reviewerWrapper}>
                <div className={s.reviewerName}>
                  {item.reviewer_name.charAt(0)}
                </div>
                <div>
                  <h3>{item.reviewer_name}</h3>
                  {[...Array(totalStars)].map((_, starIndex) => (
                    <svg
                      width="16"
                      height="16"
                      fill={
                        starIndex < item.reviewer_rating ? "#ffc531" : "#f2f4f7"
                      }
                      key={nanoid()}
                    >
                      <use href={`${sprite}#icon-star`} />
                    </svg>
                  ))}
                </div>
              </div>
              <p className={s.comment}>{item.comment}</p>
            </li>
          ))
        )}
      </ul>
      <ClientForm />
    </div>
  );
};

export default CamperReviews;
