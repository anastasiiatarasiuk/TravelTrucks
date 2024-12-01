import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTrucksThunk } from "../../redux/trucks/operations";
import { selectFilteredTrucks } from "../../redux/filters/selectors";
import CampersList from "../../components/CampersList/CampersList";
import Filters from "../../components/Filters/Filters";
import s from "./CatalogPage.module.css";
import { selectIsLoading } from "../../redux/trucks/selectors";

const CatalogPage = () => {
  const dispatch = useDispatch();

  const filteredTrucks = useSelector(selectFilteredTrucks);
  const loading = useSelector(selectIsLoading);

  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    dispatch(fetchTrucksThunk());
  }, [dispatch]);

  useEffect(() => {
    setVisibleCount(4);
  }, [filteredTrucks]);

  const onClickButton = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

  return (
    <div>
      <div className={s.container}>
        <div>
          <Filters />
        </div>
        <div>
          <CampersList filteredTrucks={filteredTrucks.slice(0, visibleCount)} />
          {!loading && visibleCount < filteredTrucks.length && (
            <button
              className={s.loadMoreBtn}
              type="button"
              onClick={onClickButton}
            >
              Load more
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CatalogPage;
