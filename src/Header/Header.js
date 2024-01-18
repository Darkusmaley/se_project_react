import "./Header.css";

const Header = ({onCreateModal}) => {
  console.log("header");
  return (
    <header className="header app__section">
      <div className="header__logo">
        <div>
          <img
            className="header__logo-image"
            src={require("../images/Logo.svg").default}
            alt="Logo"
          />
        </div>
        <div>{currentDate}, New York</div>
      </div>
      <div className="header__avatar-logo">
        <div>
          <button
            className="header__clothes-add-button"
            type=" text"
            onClick={onCreateModal}
            id="add-clothes-button"
          >
            + Add New Clothes
          </button>
        </div>
        <div>name</div>
        <div>
          <img
            className="header__logo-avatar-image"
            src={require("../images/Avatar.svg").default}
            alt="Avatar logo"
          />
        </div>
      </div>
    </header>
  );
};

const currentDate = new Date().toLocaleString("default", {
  month: "long",
  day: "numeric",
});

export default Header;
