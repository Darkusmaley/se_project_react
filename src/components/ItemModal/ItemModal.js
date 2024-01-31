import "./ItemModal.css";

const ItemModal = ({ selectedCard, onClose, onCardDelete, isLoading }) => {
  return (
    <div className={`modal `}>
      <div className="modal__content image__preview-content">
        <button
          type="button"
          className="modal__close-button"
          onClick={onClose}
        />
        <img
          src={selectedCard.imageUrl}
          className="image__preview"
          alt={selectedCard.name}
        />
        <div className="image__preview-name">{selectedCard.name}</div>
        <div className="image__preview-weather">
          Weather type:{selectedCard.weather}
        </div>
        <button
          className="image__delete-button"
          type="button"
          onClick={() => {
            onCardDelete(selectedCard);
          }}
          buttontext={isLoading ? "Saving..." : "Save"}
        >
          Delete item
        </button>
      </div>
    </div>
  );
};

export default ItemModal;
