//-------------------------properties values for input component--------------------------------
export const RegisterProps = [
  {
    id: 1,
    name: "firstName", // e.trget.name reffers to this
    type: "text",
    placeholder: "Please Enter",
    errorMessage: "*First name Required",
    required: true,
    label: "First Name",
  },
  {
    id: 2,
    name: "sureName", // e.trget.name reffers to this
    type: "text",
    placeholder: "Please Enter",
    errorMessage: "*Sure name Required",
    required: true,
    label: "Sure Name",
  },
  {
    id: 3,
    name: "contactNumber", // e.trget.name reffers to this
    type: "text",
    placeholder: "Please Enter",
    errorMessage: "*Contact Number Required",
    required: true,
    label: "Contact Number",
  },
  {
    id: 4,
    name: "email", // e.trget.name reffers to this
    type: "email",
    placeholder: "Email",
    errorMessage: "*Valid Email Required",
    required: true,
    label: "Email",
  },
  {
    id: 5,
    name: "password",
    type: "password",
    placeholder: "Password",
    errorMessage: "*Must have 8-20 characters and numbers",
    autoComplete: "on",
    required: true,
    pattern: "^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$",
    label: "Password",
  },
  {
    id: 6,
    name: "confirmpassword",
    type: "password",
    placeholder: "Confirm password",
    errorMessage: "*Password not matching",
    autoComplete: "on",
    required: true,
    pattern: "^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$",
    label: "Confirm Password",
  },
];
