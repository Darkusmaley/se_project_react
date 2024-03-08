// import "./RegisterModalModal.css";
import React, { useState } from "react";
import ModalWithForm from "../Modals/ModalWithForm";
import { registerUser } from "../../utils/auth";

const RegisterModal = ({
  handleCloseModal,
  isOpen,
  isLoading,
  registerUser,
  buttontext = isLoading ? "Registering..." : "Register",
}) => {
  const [name, setName] = useState("");
  const [avatar, setUrl] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const onRegister = (e) => {
    e.preventDefault();
    registerUser({ email, password, name, avatar });
  };

  return (
    <ModalWithForm
      title="Sign up"
      onClose={handleCloseModal}
      isOpen={isOpen}
      onSubmit={onRegister}
    >
      <div className="form__info">
        <label className="form__label">
          Email
          <input
            type="text"
            name="email"
            minLength="1"
            maxLength="30"
            className="input"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
        </label>
        <label className="form__label">
          Password
          <input
            type="text"
            name="password"
            minLength="1"
            className="input"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        <label className="form__label">
          Name
          <input
            type="text"
            name="name"
            minLength="1"
            className="input"
            placeholder="Name"
            value={name}
            onChange={handleNameChange}
          />
        </label>
        <label className="form__label">
          Avatar URL
          <input
            type="url"
            name="password"
            minLength="1"
            className="input"
            placeholder="Avater url"
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

export default RegisterModal;
