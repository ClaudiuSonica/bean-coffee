/* eslint-disable react/no-unescaped-entities */
import About from "../about/About";
import Company from "../company/Company";
import Contact from "../contact/Contact";
import "./Footer.scss";
import icons from "/assets/social-icons.svg";

const Footer = () => {

  return (
    <footer className="footer">
      <div className="footer__img__left"></div>
      <section className="section__footer">
        <div className="section__footer__text">
          <h2 className="footer__text__logo">Bean Coffee</h2>
          <p className="footer__text__info">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <img
            className="footer__text__img"
            src={icons}
            alt="social media icons"
          />
        </div>
        <div className="section__footer_nav">
          <About
            menu="Menu"
            feat="Features"
            news="News & Blogs"
            help="Help & Support"
          />
          <Company
            work="How we work"
            terms="Terms of service"
            price="Pricing"
            faq="FAQ"
          />
          <Contact
            address="Akshya Nagar 1st Block"
            phone="+1 202-918-2132"
            email="beanscene@mail.com"
            web="www.beanscene.com"
          />
        </div>
      </section>
      <div className="footer__img__right"></div>
    </footer>
  );
};

export default Footer;
