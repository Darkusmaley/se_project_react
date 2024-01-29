import React from "react";
import ItemCard from "../ItemCard/ItemCard";
import defaultClothingItems from "../../utils/constants";
import "./ClothingSection.css";

const ClothingSection = ({ onSelectCard, onCreateModal }) => {
  return (
    <div className="profile__items">
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
        {defaultClothingItems.map((item) => (
          <ItemCard
            item={item}
            onSelectCard={onSelectCard}
            onClick={onCreateModal}
          />
        ))}
      </div>
    </div>
  );
};

export default ClothingSection;
