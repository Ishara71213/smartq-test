import "./RegisterForm.css";
import logo from "../../images/logo.svg";
//components
import { InputType1 } from "../../common/inputType1/InputType1";
//data
import { RegisterProps } from "./RegisterProps";
//hooks
import { useState } from "react";

export const RegisterForm = (props) => {
  const [valuesReg, setValuesReg] = useState({
    firstName: "",
    sureName: "",
    contactNumber: "",
    email: "",
    password: "",
    confirmpassword: "",
  }); //to hold register user data

  //--------------eventHandlers-------------
  const register = () => {};

  const handleOnChange = (e) => {
    // e.preventDefault()
    setValuesReg({ ...valuesReg, [e.target.name]: e.target.value });
    console.log(valuesReg);
  };
  const handleFormSwap = () => {
    props.formToggle(!props.currentState);
  };

  return (
    <div className="RegisterFormcontainer">
      <div className="RegisterFormWrapper">
        <div className="RegisterForm-Logo">
          <img src={logo} className="smartQ-logo" alt="smartQ-logo" />
        </div>
        <form className="RegisterForm-form">
          <div className="RegisterForm-inputs">
            {RegisterProps.map((input) => (
              <InputType1
                key={input.id}
                {...input}
                value={valuesReg[input.name]}
                handleOnChange={handleOnChange}
              />
            ))}
          </div>
          <button className="RegisterForm-btn" onClick={register}>
            Sign Up
          </button>
          <div className="RegisterForm-register">
            Already a member?
            <span id="register" onClick={handleFormSwap}>
              {" "}
              Sign In
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};
