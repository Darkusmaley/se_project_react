import React, { useState } from "react";
import ModalWithForm from "./ModalWithForm";

const AddItemModal = ({ handleCloseModal, onAddItem, isOpen }) => {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [weather, setWeather] = useState("");

  const handleNameChange = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  const handleUrlChange = (e) => {
    console.log(e.target.value);
    setLink(e.target.value);
  };

  const handleWeatherChange = (e) => {
    console.log(e.target.value);
    setWeather(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem({ name, link });
  };

  return (
    <ModalWithForm
      title="New garment"
      onClose={handleCloseModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <div className="form__info">
        <label className="form__label">
          Name
          <input
            type="text"
            name="name"
            minLength="1"
            maxLength="30"
            className="input"
            placeholder="Name"
            onChange={handleNameChange}
          />
        </label>
        <label className="form__label">
          Image
          <input
            type="url"
            name="link"
            minLength="1"
            className="input"
            placeholder="Image Url"
            value={link}
            onChange={handleUrlChange}
          />
        </label>
      </div>
      <p className="form__text">Select the weather type:</p>
      <div>
        <div className="form__weathertypes">
          <label>
            <input
              type="radio"
              id="hot"
              value="hot"
              name="radio-button"
              onChange={handleWeatherChange}
            />
            Hot
          </label>
        </div>
        <div className="form__weathertypes">
          <label>
            <input
              type="radio"
              id="warm"
              value="warm"
              name="radio-button"
              onChange={handleWeatherChange}
            />
            Warm
          </label>
        </div>
        <div className="form__weathertypes">
          <label>
            <input
              type="radio"
              id="cold"
              value="cold"
              name="radio-button"
              onChange={handleWeatherChange}
            />
            Cold
          </label>
        </div>
      </div>
    </ModalWithForm>
  );
};

export default AddItemModal;
