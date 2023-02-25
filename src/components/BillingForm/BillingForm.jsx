import "./BillingForm.css";
import { useState } from "react";
import { BillingInputProps } from "./BillingInputProps";
import { InputType1 } from "../../common/inputType1/InputType1";

export const BillingForm = () => {
  const [valuesReg, setValuesReg] = useState({
    billNo: "",
    patientId: "",
    patientName: "",
    doctorName: "",
    dateAndTime: "",
    charge: "",
    tax: "",
    total: "",
  }); //to hold register user data

  const handleOnChange = (e) => {
    // e.preventDefault()
    setValuesReg({ ...valuesReg, [e.target.name]: e.target.value });
    console.log(valuesReg);
  };
  return (
    <div>
      <div className="RegisterForm-inputs">
        {BillingInputProps.map((input) => (
          <InputType1
            key={input.id}
            {...input}
            value={valuesReg[input.name]}
            handleOnChange={handleOnChange}
          />
        ))}
      </div>
      <button className="loginForn-btn">Submit</button>{" "}
    </div>
  );
};
