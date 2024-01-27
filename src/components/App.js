import "./App.css";
import Header from "./Header/Header.js";
import Main from "./Main/Main.js";
import Footer from "./Footer/Footer.js";
import ModalWithForm from "./ModalWithForm.js";
import { useEffect, useState } from "react";
import ItemModal from "./ItemModal/ItemModal.js";
import { getForcastWeather } from "../utils/Weatherapi.js";
import { parseWeatherData } from "../utils/Weatherapi.js";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);

  const handleCreateModal = () => {
    setActiveModal("create");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  useEffect(() => {
    getForcastWeather()
      .then((data) => {
        parseWeatherData(data);
        const temperature = parseWeatherData(data);
        setTemp(temperature);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <Header onCreateModal={handleCreateModal} />

      <Main weatherTemp={temp} onSelectCard={handleSelectedCard} />
      {activeModal === "create" && (
        <ModalWithForm title="New garment" onClose={handleCloseModal}>
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
              />
            </label>
          </div>
          <p className="form__text">Select the weather type:</p>
          <div>
            <div className="form__weathertypes">
              <label>
                <input type="radio" id="hot" value="hot" name="radio-button" />
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
                />
                Cold
              </label>
            </div>
          </div>
        </ModalWithForm>
      )}

      {activeModal === "preview" && (
        <ItemModal selectedCard={selectedCard} onClose={handleCloseModal} />
      )}

      <Footer />
    </div>
  );
}

export default App;
