import React from "react";
import avatar from "../../images/Avatar.svg";
import "./SideBar.css";

const SideBar = ({ profileName }) => {
  return (
    <div className="sidebar app__section">
      <div>
        <img className="sidebar__logo-avatar" src={avatar} alt="Avatar logo" />
      </div>
      <h3 className="sidebar__name">{profileName}</h3>
    </div>
  );
};

export default SideBar;
