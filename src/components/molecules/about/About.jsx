/* eslint-disable react/prop-types */
import "./About.scss";
import data from "../footer/data";

const About = (props) => {
  return (
    <div className="footer__nav__list">
      <h3 className="nav__list__title">{ data.about.title}</h3>
      <ul className="nav__list__items">
        <li className="nav__list__item">
          <a className="nav__list__link" href="#">
            {props.menu}
          </a>
        </li>
        <li className="nav__list__item">
          <a className="nav__list__link" href="#">
            {props.feat}
          </a>
        </li>
        <li className="nav__list__item">
          <a className="nav__list__link" href="#">
            {props.news}
          </a>
        </li>
        <li className="nav__list__item">
          <a className="nav__list__link" href="#">
            {props.help}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default About;
