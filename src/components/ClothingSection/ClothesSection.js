import React from "react";
import ItemCard from "../ItemCard/ItemCard";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext } from "react";
import "./ClothesSection.css";

const ClothesSection = ({
  clothingItems,
  onSelectCard,
  onCreateModal,
  isloggedIn,
  handleCardLike,
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
          const isOwner = item.owner === currentUser._id;
          if (isOwner) {
            return (
              <ItemCard
                item={item}
                onSelectCard={onSelectCard}
                key={item._id}
                isloggedIn={isloggedIn}
                handleCardLike={handleCardLike}
              />
            );
          } else return null;
        })}
      </div>
    </section>
  );
};

export default ClothesSection;
