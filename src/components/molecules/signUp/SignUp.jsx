import "./SignUp.scss";

const SignUp = () => {
  return (
    <ul className="signUp__list">
      <li className="signUp__item">
        <a className="signUp__link" href="#">
          Sign In
        </a>
      </li>
      <li className="signUp__item">
        <a className="signUp__link active" href="#">
          Sign Up
        </a>
      </li>
    </ul>
  );
};

export default SignUp;
