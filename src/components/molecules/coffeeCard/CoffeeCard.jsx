/* eslint-disable react/prop-types */
import "./CoffeeCard.scss";

const CoffeeCard = (props) => {
  return (
    <div className="card__coffee">
      <div className="card__img">
        <img src={props.imgURL} alt={props.title} />
      </div>
      <div className="card__text">
        <h2 className="card__title">{props.title}</h2>
        <h3 className="card__subtitle">{props.details}</h3>
        <p className="card__price">{props.price}</p>
        <button className="card__button">{props.button}</button>
      </div>
    </div>
  );
};

export default CoffeeCard;
