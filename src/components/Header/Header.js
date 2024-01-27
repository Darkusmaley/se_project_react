import "./Header.css";
import logo from "./Logo.svg";
import avatar from "./Avatar.svg";
import SwitchTemp from "../TemperatureSwitch/TemperatureSwitch";
const Header = ({ onCreateModal }) => {
  return (
    <header className="header app__section">
      <div className="header__logo">
        <div>
          <img className="header__logo-image" src={logo} alt="Logo" />
        </div>
        <div>{currentDate}, New York</div>
      </div>
      <div className="header__avatar">
        <SwitchTemp/>
        <div>
          <button
            className="header__clothes-add-button"
            type=" text"
            onClick={onCreateModal}
            id="add-clothes-button"
          >
            Add New Clothes
          </button>
        </div>
        <div>Terrence Tegegne</div>
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
