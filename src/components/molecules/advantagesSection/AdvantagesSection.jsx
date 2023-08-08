import "./AdvantagesSection.scss";
import data from "../../../data";
import AdvantagesCard from "../../atoms/advantagesCard/AdvantagesCard";

const AdvantagesSection = () => {
  const { advantages } = data;
  return (
    <section className="section__advantages__details">
      <h2 className="section__advantages__title">{advantages.title}</h2>
      <h3 className="section__advantages__subtitle">{advantages.subtitle}</h3>
      <div className="section__advantages__items">
        {advantages.items.map((item) => {
          return (
            <AdvantagesCard
              key={item.id}
              imgURL={item.imgURL}
              title={item.title}
              info={item.info}
            />
          );
        })}
      </div>
      <p className="section__advantages__info">Great ideas start with great coffee, Lets help you achieve that</p>
      <h3 className="section__advantages__info__title">Get started today.</h3>
      <button className="section__advantages__btn">Join Us</button>
    </section>
  );
};

export default AdvantagesSection;
