// CampersList.jsx

import { useSelector } from "react-redux";

import { selectIsLoading } from "../../redux/trucks/selectors";
import CamperCard from "../CamperCard/CamperCard";
import Loader from "../Loader/Loader";
import s from "./CampersList.module.css";

const CampersList = ({ filteredTrucks }) => {
  const isLoading = useSelector(selectIsLoading);

  if (isLoading) {
    return <Loader />;
  }

  if (filteredTrucks.length === 0) {
    return <p className={s.text}>Sorry, there are no campers!</p>;
  }

  return (
    <>
      <ul className={s.camperListContainer}>
        {filteredTrucks.map((truck) => (
          <li key={truck.id} className={s.camperCard}>
            <CamperCard truck={truck} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default CampersList;
