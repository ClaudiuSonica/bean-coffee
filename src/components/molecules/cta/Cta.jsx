import "./Cta.scss";
import cup from "/assets/cup.png"

const Cta = () => {
  return (
    <div className="cta__bg">
      <section className="cta__section">
        <div className="cta__section__text">
          <h2 className="cta__section__title">
            Get a chance to have an Amazing morning
          </h2>
          <p className="cta__section__info">
            We are giving you are one time opportunity to experience a better
            life with coffee.
          </p>
          <button className="cta__section__btn">Order Now</button>
        </div>
        <div className="cta__section__img">
          <img src={cup} alt="coffee cup" />
        </div>
      <div className="cta__beans__img"></div>
      </section>
    </div>
  );
};

export default Cta;
