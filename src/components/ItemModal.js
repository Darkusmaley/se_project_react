import "./ItemModal.css";

const ItemModal = ({ selectedCard, onClose }) => {
  return (
    <div className={`modal `}>
      <div className="modal__content image__preview-content">
        <button
          type="button"
          className="modal__close-button"
          onClick={onClose}
        />
        <img src={selectedCard.link} className="image__preview" />
        <div className="image__preview-name">{selectedCard.name}</div>
        <div className="image__preview-weather">
          Weather type:{selectedCard.weather}
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
