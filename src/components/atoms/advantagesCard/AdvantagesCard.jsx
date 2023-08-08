/* eslint-disable react/prop-types */
import "./AdvantagesCard.scss";

const AdvantagesCard = (props) => {
  return (
    <div className="card__advantages">
      <div className="card__img">
        <img src={props.imgURL} alt={props.title} />
      </div>
      <div className="card__text">
        <h2 className="card__title">{props.title}</h2>
        <h3 className="card__subtitle">{props.info}</h3>
      </div>
    </div>
  )
}

export default AdvantagesCard;