import "./LoginAndRegister.css";
import { LoginForm } from "../../components/LoginForm/LoginForm";
import { RegisterForm } from "../../components/RegisterForm/RegisterForm";
import { useState } from "react";

export const LoginAndRegister = () => {
  const [loginForm, setLoginForm] = useState(true);

  return (
    <div className="loginAndRegister-container">
      <div className="loginAndRegister-wrapper">
        {loginForm ? (
          <LoginForm currentState={loginForm} formToggle={setLoginForm} />
        ) : (
          <RegisterForm currentState={loginForm} formToggle={setLoginForm} />
        )}
      </div>
    </div>
  );
};
