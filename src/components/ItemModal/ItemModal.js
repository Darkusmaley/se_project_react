import "./ItemModal.css";
import { Modal } from "../Modals/Modal";
const ItemModal = ({
  name,
  selectedCard,
  onClose,
  onCardDelete,
  isLoading,
  buttontext,
}) => {
  return (
    <Modal name={name} onClose={onClose}>
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
        >
          {(buttontext = isLoading ? "Deleting..." : "Delete")}
        </button>
      </div>
    </Modal>
  );
};

export default ItemModal;
