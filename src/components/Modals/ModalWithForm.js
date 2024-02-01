import "./Modal.css";
import { Modal } from "./Modal";
const ModalWithForm = ({
  children,
  buttonText,
  title,
  onClose,
  name,
  isLoading,
  onSubmit,
}) => {
  return (
    <Modal name={name} onClose={onClose}>
      <div className="modal__content">
        <button
          type="button"
          onClick={onClose}
          className="modal__close-button"
        />
        <h3 className="modal__title">{title}</h3>
        <form onSubmit={onSubmit}>
          {children}
          <button type="submit" className="form__submit-button">
            {(buttonText = isLoading ? "Saving..." : "Add garment")}
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default ModalWithForm;
