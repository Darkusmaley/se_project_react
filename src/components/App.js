import "./App.css";
import Header from "./Header/Header.js";
import Main from "./Main/Main.js";
import Footer from "./Footer/Footer.js";
import Profile from "./Profile/Profile.js";
import ItemModal from "./ItemModal/ItemModal.js";
import AddItemModal from "./Modals/AddItemModal.js";
import { useEffect, useState } from "react";
import { getForcastWeather } from "../utils/Weatherapi.js";
import { parseWeatherData } from "../utils/Weatherapi.js";
import { currentTemperatureUnitContext } from "../contexts/CurrentTemperatureContext.js";
import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min.js";
import api from "../utils/api.js";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [clothingItems, setClothingItem] = useState([]);
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

  const handleCardDelete = (card) => {
    api
      .deleteClothingItems(card._id)
      .then(() => {
        setClothingItem((items) =>
          items.filter((item) => item._id !== card._id)
        );
        handleCloseModal();
      })
      .catch((err) => console.log(err));
  };

  const handleAddItemSubmit = (item) => {
    api
      .addClothingItems(item)
      .then((newItem) => {
        setClothingItem([newItem, ...clothingItems]);
        console.log(newItem);
        handleCloseModal();
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    api
      .getClothingItems()
      .then((items) => {
        setClothingItem(items);
        handleCloseModal();
      })
      .catch((err) => console.log(err));
  }, []);

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

  useEffect(() => {
    if (!activeModal) return;
    const handleOutsideClick = (e) => {
      if (e.target.classList.contains("modal")) {
        handleCloseModal();
      }
    };

    const handleEscapeClose = (e) => {
      if (e.key === "Escape") {
        handleCloseModal();
      }
    };
    document.addEventListener("keydown", handleEscapeClose);
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("keydown", handleEscapeClose);
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [activeModal]);

  const handleToggleSwitchChange = () => {
    currentTemperatureUnit === "F"
      ? setCurrentTemperatureUnit("C")
      : setCurrentTemperatureUnit("F");
  };

  return (
    <div className="App">
      <currentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <Header weatherTemp={temp} onCreateModal={handleCreateModal} />
        <Switch>
          <Route exact path="/">
            <Main
              weatherTemp={temp}
              onSelectCard={handleSelectedCard}
              clothingItems={clothingItems}
            />
          </Route>
          <Route path="/profile">
            <Profile
              clothingItems={clothingItems}
              onSelectCard={handleSelectedCard}
              onCreateModal={handleCreateModal}
            />
          </Route>
        </Switch>

        <Footer />
        {activeModal === "create" && (
          <AddItemModal
            handleCloseModal={handleCloseModal}
            isOpen={activeModal === "create"}
            handleAddItemSubmit={handleAddItemSubmit}
          />
        )}

        {activeModal === "preview" && (
          <ItemModal
            selectedCard={selectedCard}
            onClose={handleCloseModal}
            onCardDelete={handleCardDelete}
          />
        )}
      </currentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;
