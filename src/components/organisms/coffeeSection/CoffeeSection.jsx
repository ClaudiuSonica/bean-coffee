import "./CoffeeSection.scss";
import data from "../../../data";
import CoffeeCard from "../../molecules/coffeeCard/CoffeeCard";

const CoffeeSection = () => {
  const { styles } = data;
  return (
    <section className="section__coffee__details">
      <h2 className="section__details__title">{styles.title}</h2>
      <h3 className="section__details__subtitle"> {styles.subtitle}</h3>
      <div className="section__details__items">
        {styles.items.map((item) => {
          return (
            <CoffeeCard
              key={item.id}
              imgURL={item.imgURL}
              title={item.type}
              details={item.details}
              price={item.price}
              button={item.button}
            />
          );
        })}
      </div>
      <div className="section__image"></div>
    </section>
  );
};

export default CoffeeSection;
