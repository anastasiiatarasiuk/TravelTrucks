import { useSelector } from "react-redux";
import ClientForm from "../ClientForm/ClientForm";
import s from "./CampersFeatures.module.css";
import { selectTruck } from "../../redux/trucks/selectors";
import Features from "../Features/Features";

const CamperFeatures = () => {
  const truck = useSelector(selectTruck);

  return (
    <div className={s.feature}>
      <div className={s.featureWrapper}>
        <Features truck={truck} />
        <h3 className={s.equipmentTitle}>Vehicle details</h3>

        <div className={s.truckInfo}>
          <div className={s.truckCategory}>
            <p className={s.infoTitle}>Form </p>
            <p className={s.infoDescr}>{truck.form}</p>
          </div>
          <div className={s.truckCategory}>
            <p className={s.infoTitle}>Length</p>
            <p className={s.infoDescr}>{truck.length}</p>
          </div>
          <div className={s.truckCategory}>
            <p className={s.infoTitle}>Width</p>
            <p className={s.infoDescr}>{truck.width}</p>
          </div>
          <div className={s.truckCategory}>
            <p className={s.infoTitle}>Height</p>
            <p className={s.infoDescr}>{truck.height}</p>
          </div>
          <div className={s.truckCategory}>
            <p className={s.infoTitle}>Tank</p>
            <p className={s.infoDescr}>{truck.tank}</p>
          </div>
          <div className={s.truckCategory}>
            <p className={s.infoTitle}>Consumption</p>
            <p className={s.infoDescr}> {truck.consumption}</p>
          </div>
        </div>
      </div>

      <ClientForm />
    </div>
  );
};

export default CamperFeatures;
