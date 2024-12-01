import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import { selectFilters } from "../../redux/filters/selectors";
import s from "./Filters.module.css";
import sprite from "/icons/sprite.svg";

const Filters = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);

  const [filterState, setFilterState] = useState({
    location: filters.location || "",
    features: filters.features || [],
    form: filters.form || "",
  });

  const handleLocationChange = (e) => {
    setFilterState((prevState) => ({
      ...prevState,
      location: e.target.value,
    }));
  };

  const toggleFeature = (feature) => {
    setFilterState((prevState) => ({
      ...prevState,
      features: prevState.features.includes(feature)
        ? prevState.features.filter((f) => f !== feature)
        : [...prevState.features, feature],
    }));
  };

  const selectVehicleType = (type) => {
    setFilterState((prevState) => ({
      ...prevState,
      form: prevState.form === type ? "" : type,
    }));
  };

  const searchFilters = () => {
    dispatch(changeFilter(filterState));
  };

  const equipmentItems = [
    { key: "AC", name: "AC", icon: "#icon-wind" },
    { key: "bathroom", name: "Bathroom", icon: "#icon-shower" },
    { key: "kitchen", name: "Kitchen", icon: "#icon-cup-hot" },
    { key: "TV", name: "TV", icon: "#icon-tv" },
    { key: "radio", name: "Radio", icon: "#icon-radio" },
    { key: "refrigerator", name: "Refrigerator", icon: "#icon-fridge" },
    { key: "microwave", name: "Microwave", icon: "#icon-microwave" },
    { key: "gas", name: "Gas", icon: "#icon-gas" },
    { key: "water", name: "Water", icon: "#icon-water" },
  ];

  const vehicleTypes = [
    { name: "Van", type: "panelTruck", icon: "#icon-grid-1x2" },
    { name: "Alcove", type: "alcove", icon: "#icon-grid" },
    {
      name: "Fully Integrated",
      type: "fullyIntegrated",
      icon: "#icon-grid-3x3",
    },
  ];

  return (
    <div>
      <div className={s.filtersContainer}>
        <div className={s.locationFilterContainer}>
          <p className={s.locationTitle}>Location</p>
          <div className={s.locationInputContainer}>
            <svg width={20} height={20}>
              <use href={`${sprite}#icon-map`} />
            </svg>
            <input
              type="text"
              value={filterState.location}
              onChange={handleLocationChange}
              placeholder="City"
              className={s.locationInput}
            />
          </div>
        </div>
        <div>
          <p className={s.filterTitle}>Filters</p>
          <div className={s.equipmentFilterContainer}>
            <h2 className={s.equipmentTitle}>Vehicle Equipment</h2>
            <ul className={s.options}>
              {equipmentItems.map(({ key, name, icon }) => (
                <li key={key} className={s.item}>
                  <button
                    type="button"
                    className={`${s.filterBtn} ${
                      filterState.features.includes(key) ? s.checked : ""
                    }`}
                    onClick={() => toggleFeature(key)}
                  >
                    <svg width={32} height={32} className={s.icons}>
                      <use href={`${sprite}${icon}`} />
                    </svg>
                    {name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <h3 className={s.typeTitle}>Vehicle Type</h3>
          <ul className={s.type}>
            {vehicleTypes.map(({ name, type, icon }) => (
              <li key={type}>
                <button
                  type="button"
                  className={`${s.filterBtn} ${
                    filterState.form === type ? s.checked : ""
                  }`}
                  onClick={() => selectVehicleType(type)}
                >
                  <svg width={32} height={32} className={s.icons}>
                    <use href={`${sprite}${icon}`} />
                  </svg>
                  {name}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <button onClick={searchFilters} className={s.searchBtn}>
          Search
        </button>
      </div>
    </div>
  );
};

export default Filters;
