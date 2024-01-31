import React from "react";
import ItemCard from "../ItemCard/ItemCard";
import "./ClothesSection.css";

const ClothesSection = ({ clothingItems, onSelectCard, onCreateModal }) => {
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
        {clothingItems.map((item) => (
          <ItemCard item={item} onSelectCard={onSelectCard} key={item._id} />
        ))}
      </div>
    </section>
  );
};

export default ClothesSection;
