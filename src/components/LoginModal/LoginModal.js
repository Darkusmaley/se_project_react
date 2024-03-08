import ModalWithForm from "../Modals/ModalWithForm";
import React, { useState } from "react";
import { authorizeUser } from "../../utils/auth";

const LoginModal = ({
  handleCloseModal,
  isOpen,
  isLoading,
  loginUser,
  buttontext = isLoading ? "Logging in..." : "Log in",
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const onLogin = (e) => {
    e.preventDefault();
    loginUser({ email, password });
  };

  return (
    <ModalWithForm
      title="Login"
      onClose={handleCloseModal}
      isOpen={isOpen}
      onSubmit={onLogin}
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
      </div>

      <button type="submit" className="form__submit-button">
        {buttontext}
      </button>
    </ModalWithForm>
  );
};

export default LoginModal;
