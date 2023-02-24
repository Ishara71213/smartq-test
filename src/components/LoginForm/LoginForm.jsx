import "./LoginForm.css";
import logo from "../../images/logo.svg";
//components
import { InputType1 } from "../../common/inputType1/InputType1";
//data
import { InputsProps } from "./InputProps";
//hooks
import { useState } from "react";

export const LoginForm = () => {
  const [valuesLogin, SetValuesLogin] = useState({
    email: "",
    password: "",
  });

  //-----------------EventHandlers------------------------

  const handleOnChange = (e) => {
    // e.preventDefault()
    SetValuesLogin({ ...valuesLogin, [e.target.name]: e.target.value });
    console.log(valuesLogin);
  };
  const login = (e) => {};

  return (
    <div className="LoginFormcontainer">
      <div className="LoginFormWrapper">
        <div className="LoginForm-Logo">
          <img src={logo} className="smartQ-logo" alt="smartQ-logo" />
        </div>
        <form className="LoginForm-form">
          {InputsProps.map((input) => (
            <InputType1
              key={input.id}
              {...input}
              value={valuesLogin[input.name]}
              handleOnChange={handleOnChange}
            />
          ))}
          <div className="loginForm-forgetPassword">
            <span id="forgetPassword">Forget Password?</span>
          </div>
          <button className="loginForn-btn" onClick={login}>
            Log In
          </button>
          <div className="loginForm-register">
            Don't Have an account?
            <span id="register"> Register</span>
          </div>
        </form>
      </div>
    </div>
  );
};
