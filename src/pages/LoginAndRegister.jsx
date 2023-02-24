import "./LoginAndRegister.css";
import { LoginForm } from "../components/LoginForm/LoginForm";

export const LoginAndRegister = () => {
  return (
    <div className="loginAndRegister-container">
      <div className="loginAndRegister-wrapper">
        <LoginForm />
      </div>
    </div>
  );
};
