import { Link } from "react-router-dom";
import { useState } from "react";
import "./auth.css";
import { handleLoginValidation } from "../../utils";
import { InputTextBox, InputPassword } from "../../components";
import { useAuth } from "../../context/auth-context";

const Login = () => {
  const [userData, setUserData] = useState({
    userMail: "",
    password: "",
    mailError: "",
    passwordError: "",
  });

  const { signIn } = useAuth();

  const loginHandler = () => {
    const { mailError, passwordError } = handleLoginValidation(
      userData.userMail,
      userData.password
    );

    if (mailError.length || passwordError.length) {
      setUserData((prevData) => ({
        ...prevData,
        mailError: mailError,
        passwordError: passwordError,
      }));
    }
    if (mailError.length === 0 && passwordError.length === 0) {
      signIn(userData.userMail, userData.password);
    }
  };

  return (
    <>
      <main>
        <div className="login--container">
          <h1 className="heading--3 text--center">Login</h1>
          <InputTextBox
            error={userData.mailError}
            labelName={"Email"}
            id={"email"}
            placeHolder="test@test.com"
            changeHandler={(e) => {
              setUserData((prevData) => ({
                ...prevData,
                userMail: e.target.value,
                mailError: "",
              }));
            }}
            type="email"
            value={userData.userMail}
          />
          <InputPassword
            error={userData.passwordError}
            labelName="Password"
            id="password"
            value={userData.password}
            changeHandler={(e) =>
              setUserData((prevData) => ({
                ...prevData,
                password: e.target.value,
                passwordError: "",
              }))
            }
          />

          <div className="m-t-1 m-h-1">
            <button
              className="btn btn--primary w-100"
              onClick={() => {
                loginHandler();
              }}
            >
              Login
            </button>
          </div>
          <div className="m-t-1 m-h-1">
            <button
              className="btn btn--primary w-100"
              onClick={() => {
                setUserData((prevData) => ({
                  ...prevData,
                  password: "test1234",
                  userMail: "testuser@gmail.com",
                  mailError: "",
                  passwordError: "",
                }));
              }}
            >
              Fill the test credentials
            </button>
          </div>
          <p className="signup--text m-t-1 m-h-1">
            Don't have a account?
            <Link to="/signUp" className="link link--information">
              Sign up
            </Link>
          </p>
        </div>
      </main>
    </>
  );
};

export { Login };
