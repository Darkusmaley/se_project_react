import React from "react";
import ItemCard from "../ItemCard/ItemCard";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext } from "react";
import "./ClothesSection.css";

const ClothesSection = ({
  clothingItems,
  onSelectCard,
  onCreateModal,
  loggedIn,
}) => {
  const currentUser = useContext(CurrentUserContext);
  return (
    <section className="profile__items">
      <div className="profile__new-clothes" type="text">
        <p>Your items</p>
        <div className="profile__new-clothes" type="text">
          <button
            className="profile__add-clothes-button"
            type="text"
            onClick={onCreateModal}
          >
            + Add new
          </button>
        </div>
      </div>

      <div className="profile__clothes-section">
        {clothingItems.map((item) => {
          const isOwn = item.owner === currentUser._id;
          if (isOwn) {
            return (
              <ItemCard
                item={item}
                onSelectCard={onSelectCard}
                key={item._id}
                loggedIn={loggedIn}
              />
            );
          } else return null;
        })}
      </div>
    </section>
  );
};

export default ClothesSection;
