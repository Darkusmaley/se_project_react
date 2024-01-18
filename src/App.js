import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header.js";
import Main from "./components/Main.js";
import Footer from "./components/Footer.js";
import ModalWithForm from "./components/ModalWithForm.js";
import { useEffect, useState } from "react";
import ItemModal from "./components/ItemModal.js";
import { getForcastWeather } from "./components/utils/Weatherapi.js";
import { parseWeatherData } from "./components/utils/Weatherapi.js";

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

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    getForcastWeather().then((data) => {
      parseWeatherData(data);
      const temperature = parseWeatherData(data);
      setTemp(temperature);
    });
  }, []);

  return (
    <div className="App">
      <Header onCreateModal={handleCreateModal} />
      <Main weatherTemp={temp} onSelectCard={handleSelectedCard} />
      {activeModal === "create" && (
        <ModalWithForm
          title="New garment"
          onClose={handleCloseModal}
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
              <input type="radio" id="hot" value="hot" />
              <label>Hot</label>
            </div>
            <div className="form__weathertypes">
              <input type="radio" id="warm" value="warm" />
              <label>Warm</label>
            </div>
            <div className="form__weathertypes">
              <input type="radio" id="cold" value="cold" />
              <label>Cold</label>
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
