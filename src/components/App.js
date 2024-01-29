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
import { currentTemperatureUnitContext } from "./context/CurrentTemperatureContext.js";
import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min.js";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [item, setClothItem] = useState("");
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

  const onAddItem = ({ name, link }) => {
    console.log({ name, link });
  };

  const handleAddItemSubmit = () => {};

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
            <Main weatherTemp={temp} onSelectCard={handleSelectedCard} />
          </Route>
          <Route path="/profile">
            <Profile onSelectCard={handleSelectedCard} onCreateModal={handleCreateModal} />
          </Route>
        </Switch>

        <Footer />
        {activeModal === "create" && (
          <AddItemModal
            handleCloseModal={handleCloseModal}
            isOpen={activeModal === "create"}
            onAddItem={onAddItem}
          />
        )}

        {activeModal === "preview" && (
          <ItemModal selectedCard={selectedCard} onClose={handleCloseModal} />
        )}
      </currentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;
