import "./Header.css";
import logoIcon from "../../images/logoIcon.svg";
import logoText from "../../images/logoText.svg";
import { FaUserCircle } from "react-icons/fa";

export const Header = (props) => {
  return (
    <div className="container">
      <div className="logoWrapper">
        <img
          src={logoIcon}
          className="smartQ-logo"
          alt="smartQ-logo"
          width={60}
        />
        <img
          src={logoText}
          className="smartQ-logo"
          alt="smartQ-logo"
          height={35}
        />
      </div>

      <div className="userProfile">
        <div className="userName">{props.userName}</div>
        <div className="profileImgWrapper">
          <FaUserCircle size={60} color="#61c4b4" />
        </div>
      </div>
    </div>
  );
};
