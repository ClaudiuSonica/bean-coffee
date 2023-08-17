/* eslint-disable react/no-unescaped-entities */
import "./Feedback.scss";
import arrowLeft from "/assets/arrow-l.svg";
import arrowRight from "/assets/arrow-r.svg";
import person from "/assets/person.png";

const Feedback = () => {
  return (
    <section className="section__feedback">
      <div className="section__feedback__right"></div>
      <div className="section__feedback__left"></div>
      <h2 className="section__feedback__title">
        Our coffee perfection feedback
      </h2>
      <h3 className="section__feedback__subtitle">
        Our customers has amazing things to say about us
      </h3>
      <div className="section__feedback__area">
        <div className="section__feedback__comment">
          <img className="comment__arrow__l" src={arrowLeft} alt="arrow" />
          <p className="feedback__comment__text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with
            the release of Letraset.....
          </p>
          <img className="comment__arrow__r" src={arrowRight} alt="arrow" />
        </div>
        <div className="section__feedback__person">
          <h3 className="feedback__person__name">Jonny Thomas</h3>
          <h4 className="feedback__person__position">Project Manager</h4>
          <img className="person__picture" src={person} alt="profile picture" />
        </div>
      </div>
    </section>
  );
};

export default Feedback;
