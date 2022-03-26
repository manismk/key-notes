import { useState } from "react";

export const InputPassword = ({
  error,
  labelName,
  id,
  value,
  changeHandler,
}) => {
  const [passwordShown, setPasswordShown] = useState(false);
  return (
    <div
      className={`input--container input--${
        error.length ? "error" : "standard"
      } m-t-2`}
    >
      <label htmlFor={id} className="input--label">
        {labelName}
      </label>
      <input
        type={`${passwordShown ? "text" : "password"}`}
        id={id}
        className="input"
        placeholder="********"
        value={value}
        onChange={changeHandler}
      />
      <button className="btn icon--btn">
        <i
          className={`fas fa-eye${passwordShown ? "-slash" : ""}`}
          aria-hidden="true"
          onClick={() => {
            setPasswordShown((prev) => !prev);
          }}
        ></i>
      </button>
      <span className="input--error--message">{error}</span>
    </div>
  );
};
