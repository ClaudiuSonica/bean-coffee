/* eslint-disable react/no-unescaped-entities */
import "./Banner.scss";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner__text">
        <h1 className="banner__title">We've got your morning covered with</h1>
        <h2 className="banner__subtitle">Coffee</h2>
        <p className="banner__info">
          It is best to start your day with a cup of coffee. Discover the best
          flavours coffee you will ever have. We provide the best for our
          customers.
        </p>
        <button className="banner__button">
          Order Now
        </button>
      </div>
    </div>
  );
};

export default Banner;
