import React from "react";
import { Link } from "react-router-dom";
import avatar from "../Header/Avatar.svg";
import "./SideBar.css";

const SideBar = () => {
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
        <div className="sidebar__name">Name</div>
      </div>
      <section className="card__section" id="card-section">
        <div className="card__items">
          {filterCards.map((clothes) => (
            <ItemCard
              item={clothes}
              onSelectCard={onSelectCard}
              key={clothes._id}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default SideBar;
