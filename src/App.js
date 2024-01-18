import logo from "./logo.svg";
import "./App.css";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import ModalWithForm from "./Modals/ModalWithForm";
import { useEffect, useState } from "react";
import ItemModal from "./ItemModal/ItemModal";
import { getForcastWeather } from "./utils/Weatherapi.js";
import { parseWeatherData } from "./utils/Weatherapi.js";

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
