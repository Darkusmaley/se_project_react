import React from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext } from "react";
import "./SideBar.css";

const SideBar = ({ editProfile, logout }) => {
  const currentUser = useContext(CurrentUserContext);
  return (
    <div className="sidebar app__section">
      <div className="sidebar__logo">
        <img
          className="sidebar__logo-avatar"
          src={currentUser.avatar}
          alt="Avatar logo"
        />
        <h3 className="sidebar__name">{currentUser.name}</h3>
      </div>
      <div className="profile__options">
        <button type="button" className="profile__button" onClick={editProfile}>
          Change Profile Data
        </button>
        <button type="button" className="profile__button" onclick={logout}>
          Log out
        </button>
      </div>
    </div>
  );
};

export default SideBar;
