import "./ItemModal.css";
import { Modal } from "../Modals/Modal";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext } from "react";

const ItemModal = ({
  name,
  selectedCard,
  onClose,
  onCardDelete,
  isLoading,
  buttontext = isLoading ? "Deleting..." : "Delete",
}) => {
  const currentUser = useContext(CurrentUserContext);
  const isOwner = selectedCard.owner === currentUser._id;
  const itemDeleteButtonClassName = `item__delete-button${
    isOwner ? "item__delete-button_visible" : "item_delete-button_hidden"
  }`;
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
        <>
          {isOwner ? (
            <button
              className={itemDeleteButtonClassName}
              type="button"
              onClick={() => {
                onCardDelete(selectedCard);
              }}
            >
              {buttontext}
            </button>
          ) : (
            <></>
          )}
        </>
      </div>
    </Modal>
  );
};

export default ItemModal;
