import "./App.css";
import Header from "./Header/Header.js";
import Main from "./Main/Main.js";
import Footer from "./Footer/Footer.js";
import Profile from "./Profile/Profile.js";
import ItemModal from "./ItemModal/ItemModal.js";
import AddItemModal from "./Modals/AddItemModal.js";
import RegisterModal from "./RegisterModal/RegisterModal.js";
import LoginModal from "./LoginModal/LoginModal.js";
import {
  register,
  authorizeUser,
  checkToken,
  getUserData,
  update,
} from "../utils/auth.js";
import { useEffect, useState } from "react";
import { getForcastWeather } from "../utils/Weatherapi.js";
import { parseWeatherData } from "../utils/Weatherapi.js";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
import {
  Switch,
  Route,
  useHistory,
} from "react-router-dom/cjs/react-router-dom.min.js";
import api from "../utils/api.js";
import { deleteClothingItems, addClothingItems } from "../utils/api.js";
import EditProfileModal from "../EditProfileModal/EditProfileModal.js";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [location, setLocation] = useState("");
  const [clothingItems, setClothingItem] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setLogin] = useState(false);
  const [currentUser, setCurrentUSer] = useState({});
  const history = useHistory("");

  const handleCreateModal = () => {
    setActiveModal("create");
  };

  const handleLoginModal = () => {
    setActiveModal("login");
  };

  const handleRegisterModal = () => {
    setActiveModal("register");
  };

  const handleEditProfileModal = () => {
    setActiveModal("edit");
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

  const loginUser = (user) => {
    setIsLoading(true);
    authorizeUser(user)
      .then((res) => {
        handleCloseModal();
        localStorage.setItem("jwt", res.token);

        return checkLoggedIn(res.data);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(setIsLoading(false));
  };

  const registerUser = (user) => {
    register(user)
      .then(() => {
        handleCloseModal();
        loginUser(user);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const updateUser = (user) => {
    const jwt = localStorage.getItem("jwtF");
    update(user, jwt)
      .then((res) => {
        setCurrentUSer(res.data);
        handleCloseModal();
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const logoutUser = () => {
    localStorage.removeItem("jwt");
    setCurrentUSer({});
    setLogin(false);
    history.pushState("/");
  };

  function checkLoggedIn(token) {
    return checkToken(token)
      .then((res) => {
        setLogin(true);
        setCurrentUSer(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  useEffect(() => {
    api
      .getClothingItems()
      .then((items) => {
        setClothingItem(items);
        handleCloseModal();
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    getForcastWeather()
      .then((data) => {
        setLocation(data.name);
        parseWeatherData(data);
        const temperature = parseWeatherData(data);
        setTemp(temperature);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");

    if (jwt !== null) {
      checkLoggedIn(jwt)
        .then(() => {
          getUserData(jwt).then((res) => {
            setCurrentUSer(res.data);
          });
        })
        .catch((err) => {
          if (err.response && err.response.status === 401) {
            console.error("Token expired or invalid. Logging out...");
            logoutUser();
          } else {
            console.error("Error fetching user data:", err);
          }
        });
    }
  });

  const handleToggleSwitchChange = () => {
    currentTemperatureUnit === "F"
      ? setCurrentTemperatureUnit("C")
      : setCurrentTemperatureUnit("F");
  };

  return (
    <div className="App">
      <CurrentUserContext.Provider value={currentUser}>
        <CurrentTemperatureUnitContext.Provider
          value={{ currentTemperatureUnit, handleToggleSwitchChange }}
        >
          <Header
            weatherTemp={temp}
            onCreateModal={handleCreateModal}
            isLoggedIn={isLoggedIn}
            onLogin={handleLoginModal}
            onRegister={handleRegisterModal}
            location={location}
          />
          <Switch>
            <Route exact path="/">
              <Main
                weatherTemp={temp}
                onSelectCard={handleSelectedCard}
                clothingItems={clothingItems}
                isLoggedIn={isLoggedIn}
              />
            </Route>
            <Route path="/profile" isLoggedIn={isLoggedIn}>
              <Profile
                clothingItems={clothingItems}
                onSelectCard={handleSelectedCard}
                onCreateModal={handleCreateModal}
                isLoggedIn={isLoggedIn}
                logout={logoutUser}
                editProfile={handleEditProfileModal}
              />
            </Route>
          </Switch>

          <Footer />

          {activeModal === "register" && (
            <RegisterModal
              handleCloseModal={handleCloseModal}
              isOpen={activeModal === "register"}
              registerUser={registerUser}
              openLoginModal={handleLoginModal}
              isLoading={isLoading}
            />
          )}
          {activeModal === "login" && (
            <LoginModal
              handleCloseModal={handleCloseModal}
              isOpen={activeModal === "login"}
              loginUser={loginUser}
              openRegisterModal={handleRegisterModal}
              isLoading={isLoading}
            />
          )}

          {activeModal === "edit" && (
            <EditProfileModal
              handleCloseModal={handleCloseModal}
              isOpen={activeModal === "edit"}
              updateUser={updateUser}
              isLoading={isLoading}
            />
          )}

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
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
