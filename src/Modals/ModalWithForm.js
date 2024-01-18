import "./Modal.css";

const MOdalWithForm = ({
  children,
  buttonText = "Add garment",
  title,
  onClose,
  name,
}) => {
  console.log("ModalWithForm");
  return (
    <div className={`modal modal__type_${name}`}>
      <div className="modal__content">
        <button
          type="button"
          onClick={onClose}
          className="modal__close-button"
        ></button>
        <h3 className="modal__title">{title}</h3>
        <form>
          {children}
          <button type="submit" className="form__submit-button">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
};

export default MOdalWithForm;
