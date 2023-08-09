/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import "./Newsletter.scss";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className="newsletter__bg">
      <section className="section__newsletter">
        <h2 className="section__newsletter__title">
          Subscribe to get the Latest News
        </h2>
        <h3 className="section__newsletter__subtitle">
          Don't miss out on our latest news, updates, tips and special offers
        </h3>
        <form className="form" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            name="email"
            placeholder="Enter your mail"
            value={email}
            onChange={handleChange}
          />
          <button className="newsletter__form__btn">Subscribe</button>
        </form>
      </section>
    </div>
  );
};

export default Newsletter;
