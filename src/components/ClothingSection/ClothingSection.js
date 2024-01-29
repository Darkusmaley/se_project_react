import React from "react";

const ClothingSection = ({filterCards, ItemCard, onSelectCard}) => {
  return (
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
  );
};

export default ClothingSection;
