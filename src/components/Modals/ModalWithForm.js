import "./Modal.css";
import { Modal } from "./Modal";
const ModalWithForm = ({ children, title, onClose, name, onSubmit }) => {
  return (
    <Modal name={name} onClose={onClose}>
      <div className="modal__content">
        <button
          type="button"
          onClick={onClose}
          className="modal__close-button"
        />
        <h3 className="modal__title">{title}</h3>
        <form onSubmit={onSubmit}>{children}</form>
      </div>
    </Modal>
  );
};

export default ModalWithForm;
