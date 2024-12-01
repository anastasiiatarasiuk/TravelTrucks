import s from "./Features.module.css";
import sprite from "/icons/sprite.svg";

const Features = ({ truck }) => {
  const features = [
    {
      key: "transmission",
      name: "Automatic",
      icon: "#icon-diagram",
      value: "automatic",
    },
    { key: "engine", name: "Petrol", icon: "#icon-fuel-pump", value: "petrol" },
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
  return (
    <div>
      <div className={s.features}>
        {features.map((feature) => {
          const isFeatureAvailable =
            truck[feature.key] === true || truck[feature.key] === feature.value;
          return isFeatureAvailable ? (
            <div className={s.feature} key={feature.key}>
              <svg className={s.icon} width="20" height="20">
                <use href={`${sprite}${feature.icon}`} />
              </svg>
              <span>{feature.name}</span>
            </div>
          ) : null;
        })}
      </div>
    </div>
  );
};

export default Features;
