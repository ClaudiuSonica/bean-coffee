import "./CoffeeInfo.scss";
import beansCup from "/assets/beans-cup.png";

const CoffeeInfo = () => {
  return (
    <section className="section__info">
      <div className="section__info__text">
        <h2 className="section__info__title">Discover the best coffee</h2>
        <p className="section__info__p">
          Bean Scene is a coffee shop that provides you with quality coffee that
          helps boost your productivity and helps build your mood. Having a cup
          of coffee is good, but having a cup of real coffee is greater. There
          is no doubt that you will enjoy this coffee more than others you have
          ever tasted.
        </p>
        <button className="section__info__btn">Learn More</button>
      </div>
      <div className="section__info__img">
        <img src={beansCup} alt="a cup of coffee made out coffee beans" />
      </div>
      <div className="section__image"></div>
    </section>
  );
};

export default CoffeeInfo;
