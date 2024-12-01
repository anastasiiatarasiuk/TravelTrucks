import { useDispatch, useSelector } from "react-redux";
import CamperInfo from "../../components/CamperInfo/CamperInfo";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchTruckDetails } from "../../redux/trucks/operations";
import s from "./CamperPage.module.css";
import { selectIsLoading } from "../../redux/trucks/selectors";
import Loader from "../../components/Loader/Loader";

const CamperPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchTruckDetails(id));
  }, [dispatch, id]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className={s.container}>
      <CamperInfo />
    </div>
  );
};

export default CamperPage;
