import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import clsx from "clsx";
import s from "./CamperInfo.module.css";
import { selectTruck } from "../../redux/trucks/selectors";
import { Navigate, NavLink, Route, Routes } from "react-router-dom";
import CamperFeatures from "../CamperFeatures/CamperFeatures";
import CamperReviews from "../CamperReviews/CamperReviews";
import sprite from "/icons/sprite.svg";

const activeLink = ({ isActive }) => clsx(s.detailsLink, isActive && s.active);

const CamperInfo = () => {
  const { id } = useParams();
  const truck = useSelector(selectTruck); // Використовуйте селектор з параметром, якщо потрібно
  return (
    <div>
      <h2 className={s.title}>{truck.name}</h2>
      <div className={s.ratingWrapper}>
        <svg className={s.iconStar} width="16" height="16">
          <use href={`${sprite}#icon-star`} />
        </svg>
        <p className={s.reviews}>
          {truck.rating} ({truck.reviews ? truck.reviews.length : 0} Reviews)
        </p>
        <svg className={s.icon} width="16" height="16">
          <use href={`${sprite}#icon-map`} />
        </svg>{" "}
        {truck.location}
      </div>
      <p className={s.price}>{`€ ${Number(truck.price).toFixed(2)}`}</p>

      {truck.gallery.length > 0 ? (
        <ul className={s.gallery}>
          {truck.gallery.map((item, index) => (
            <li key={index}>
              <img
                className={s.photo}
                src={item.thumb}
                alt={`Gallery image ${index + 1}`}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p>No images available.</p>
      )}
      <p className={s.itemDescription}>{truck.description}</p>

      <ul className={s.detailsList}>
        <li className={s.detailsItem}>
          <NavLink className={activeLink} to={`/catalog/${id}/features`}>
            Features
          </NavLink>
        </li>
        <li className={s.detailsItem}>
          <NavLink className={activeLink} to={`/catalog/${id}/reviews`}>
            Reviews
          </NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="" element={<Navigate to="features" />} />
        <Route path="features" element={<CamperFeatures />} />
        <Route path="reviews" element={<CamperReviews />} />
      </Routes>
    </div>
  );
};

export default CamperInfo;
