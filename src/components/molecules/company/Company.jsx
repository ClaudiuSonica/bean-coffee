/* eslint-disable react/prop-types */
import "./Company.scss";
import data from "../footer/data";

const Company = (props) => {
  return (
    <div className="footer__nav__list">
      <h3 className="nav__list__title">{ data.company.title}</h3>
      <ul className="nav__list__items">
        <li className="nav__list__item">
          <a className="nav__list__link" href="#">
            {props.work}
          </a>
        </li>
        <li className="nav__list__item">
          <a className="nav__list__link" href="#">
            {props.terms}
          </a>
        </li>
        <li className="nav__list__item">
          <a className="nav__list__link" href="#">
            {props.price}
          </a>
        </li>
        <li className="nav__list__item">
          <a className="nav__list__link" href="#">
            {props.faq}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Company;
