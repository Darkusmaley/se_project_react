import { useState, useContext, useEffect } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import ModalWithForm from "../components/Modals/ModalWithForm";

const EditProfileModal = ({
  handleCloseModal,
  isOpen,
  isLoading,
  updateUser,
  buttontext = isLoading ? "Saving..." : "Save changes",
}) => {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState("");
  const [avatar, setUrl] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    updateUser({ name, avatar });
  };

  useEffect(() => {
    setName(currentUser.name);
    setUrl(currentUser.avatar);
  }, [currentUser.name, currentUser.avatar]);

  return (
    <ModalWithForm
      title="Change profile data"
      onClose={handleCloseModal}
      isOpen={isOpen}
      onSubmit={onSubmit}
    >
      <div className="form__info">
        <label className="form__label">
          Name*
          <input
            type="text"
            name="name"
            minLength="1"
            className="input"
            placeholder="Name"
            value={currentUser.name}
            onChange={handleNameChange}
          />
        </label>
        <label className="form__label">
          Avatar
          <input
            type="url"
            name="avatar"
            minLength="1"
            className="input"
            placeholder={currentUser.avatar}
            value={avatar}
            onChange={handleUrlChange}
          />
        </label>
      </div>

      <button type="submit" className="form__submit-button">
        {buttontext}
      </button>
    </ModalWithForm>
  );
};

export default EditProfileModal;
