import React from "react";
import avatar from "../Header/Avatar.svg";
import "./SideBar.css";

const SideBar = ({ profileName }) => {
  return (
    <div>
      <div className="sidebar app__section">
        <div>
          <img
            className="sidebar__logo-avatar"
            src={avatar}
            alt="Avatar logo"
          />
        </div>
        <div className="sidebar__name">{profileName}</div>
      </div>
    </div>
  );
};

export default SideBar;
