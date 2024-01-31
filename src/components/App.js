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
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext.js";
import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min.js";
import api from "../utils/api.js";
import { deleteClothingItems, addClothingItems } from "../utils/api.js";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [clothingItems, setClothingItem] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
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

  const handleSubmit = (request) => {
    setIsLoading(true);
    request()
      .then(handleCloseModal)
      .catch(console.error)
      .finally(() => setIsLoading(false));
  };

  const handleCardDelete = (card) => {
    const makeRequest = () => {
      return deleteClothingItems(card._id).then(() => {
        setClothingItem((items) =>
          items.filter((item) => item._id !== card._id)
        );
      });
    };
    handleSubmit(makeRequest);
  };

  const handleAddItemSubmit = (item) => {
    const makeRequest = () => {
      return addClothingItems(item).then((newItem) => {
        setClothingItem([newItem, ...clothingItems]);
      });
    };
    handleSubmit(makeRequest);
  };

  useEffect(() => {
    setIsLoading(true);
    api
      .getClothingItems()
      .then((items) => {
        setClothingItem(items);
        handleCloseModal();
      })
      .catch(console.error)
      .finally(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    setIsLoading(true);
    getForcastWeather()
      .then((data) => {
        parseWeatherData(data);
        const temperature = parseWeatherData(data);
        setTemp(temperature);
      })
      .catch(console.error)
      .finally(() => setIsLoading(false));
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
      <CurrentTemperatureUnitContext.Provider
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
            isLoading={isLoading}
          />
        )}

        {activeModal === "preview" && (
          <ItemModal
            selectedCard={selectedCard}
            onClose={handleCloseModal}
            onCardDelete={handleCardDelete}
            isLoading={isLoading}
          />
        )}
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;
