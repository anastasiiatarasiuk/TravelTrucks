// CamperCard.jsx
import { useDispatch, useSelector } from "react-redux";
import s from "./CamperCard.module.css";
import sprite from "/icons/sprite.svg";
import { selectFavourites } from "../../redux/favourites/selectors";
import { toggleFavourite } from "../../redux/favourites/slice";
import { Link } from "react-router-dom";
import Features from "../Features/Features";

const CamperCard = ({ truck }) => {
  const dispatch = useDispatch();
  const favourites = useSelector(selectFavourites);
  const isFavourite =
    Array.isArray(favourites) && favourites.includes(truck.id);
  const handleToggleFavourite = () => {
    dispatch(toggleFavourite(truck.id));
  };

  return (
    <div className={s.camperCard}>
      {truck.gallery?.[0]?.thumb && (
        <img
          className={s.photo}
          src={`${truck.gallery[0].thumb}`}
          width="292"
          alt={`${truck.name}`}
        />
      )}
      <div className={s.content}>
        <div className={s.titleCont}>
          <h2 className={s.cardTitle}>{truck.name}</h2>
          <div className={s.priceCont}>
            <p className={s.cardPrice}>{`€ ${Number(truck.price).toFixed(
              2
            )}`}</p>
            <svg
              width="26"
              height="24"
              onClick={handleToggleFavourite}
              fill={isFavourite ? "#e44848" : "#101828"}
              cursor="pointer"
            >
              <use href={`${sprite}#icon-heart`} />
            </svg>
          </div>
        </div>
        <div className={s.locationCont}>
          <div className={s.locationContText}>
            <svg width="16" height="16" className={s.iconStar}>
              <use href={`${sprite}#icon-star`} />
            </svg>
            <p className={s.reviews}>
              {truck.rating} ({truck.reviews.length} Reviews)
            </p>
          </div>
          <div className={s.locationContText}>
            <svg width="20" height="20">
              <use href={`${sprite}#icon-map`} />
            </svg>
            <p className={s.location}>{truck.location}</p>
          </div>
        </div>
        <p className={s.description}>
          {`${truck.description.substring(0, 60)}` + "..."}
        </p>
        <Features truck={truck} />
        <Link to={`/catalog/${truck.id}`} rel="noopener noreferrer">
          <button type="button" className={s.showMoreBtn}>
            Show more
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CamperCard;
