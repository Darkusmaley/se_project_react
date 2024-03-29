import "./Header.css";
import logo from "../../images/Logo.svg";
import ToggleSwitch from "../TemperatureSwitch/ToggleSwitch";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { Link } from "react-router-dom";
import { useContext } from "react";

const Header = ({
  onCreateModal,
  isLoggedIn,
  onRegister,
  onLogin,
  location,
}) => {
  const currentUser = useContext(CurrentUserContext);

  return (
    <header className="header app__section">
      <div className="header__logo">
        <div>
          <Link to="/">
            <img className="header__logo-image" src={logo} alt="Logo" />
          </Link>
        </div>
        <div className="header__date">
          {currentDate}, {location}
        </div>
      </div>

      <div className="header__avatar">
        <ToggleSwitch />
        {isLoggedIn ? (
          <>
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
                {currentUser?.name}
              </Link>
            </div>
            <div>
              <img
                className="header__logo-avatar-image"
                src={currentUser?.avatar}
                placeholder={currentUser?.name}
                alt="Avatar logo"
              />
            </div>
          </>
        ) : (
          <>
            <button
              type="button"
              onClick={onRegister}
              className="header__button"
            >
              Sign up
            </button>
            <button type="button" onClick={onLogin} className="header__button">
              Login{" "}
            </button>
          </>
        )}
      </div>
    </header>
  );
};

const currentDate = new Date().toLocaleString("default", {
  month: "long",
  day: "numeric",
});

export default Header;
