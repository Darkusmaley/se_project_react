import "./Header.css";
import logo from "./Logo.svg";
import avatar from "./Avatar.svg";
import SwitchTemp from "../TemperatureSwitch/TemperatureSwitch";
import { Link } from "react-router-dom";

const Header = ({ onCreateModal }) => {
  const profileName = "Terrence Tegegne";
  return (
    <header className="header app__section">
      <div className="header__logo">
        <div>
          <Link to="/">
            <img className="header__logo-image" src={logo} alt="Logo" />
          </Link>
        </div>
        <div className="header__date">{currentDate}, New York</div>
      </div>
      <div className="header__avatar">
        <SwitchTemp />
        <div>
          <button
            className="header__clothes-add-button"
            type=" text"
            onClick={onCreateModal}
            id="add-clothes-button"
          >
            + Add new
          </button>
        </div>
        <div>
          <Link to="/profile" className="profile__link">
            {profileName}
          </Link>
        </div>
        <div>
          <img
            className="header__logo-avatar-image"
            src={avatar}
            alt="Avatar logo"
          />
        </div>
      </div>
    </header>
  );
};

const currentDate = new Date().toLocaleString("default", {
  month: "long",
  day: "numeric",
});

export default Header;
