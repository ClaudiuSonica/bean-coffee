/* eslint-disable react/prop-types */
import "./Contact.scss";
import data from "../footer/data";

const Contact = (props) => {
  return (
    <div className="footer__nav__list">
      <h3 className="nav__list__title">{data.contact.title}</h3>
      <ul className="nav__list__items">
        <li className="nav__list__item">
          <a className="nav__list__link" href="#">
            {props.address}
          </a>
        </li>
        <li className="nav__list__item">
          <a className="nav__list__link" href="#">
            {props.phone}
          </a>
        </li>
        <li className="nav__list__item">
          <a className="nav__list__link" href="#">
            {props.email}
          </a>
        </li>
        <li className="nav__list__item">
          <a className="nav__list__link" href="#">
            {props.web}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
