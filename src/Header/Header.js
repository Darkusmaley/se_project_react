import "./Header.css";

const Header = () => {
  console.log("header");
  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <img
            className="header__logo-image"
            src="./images/Logo.svg"
            alt="Logo"
          />
        </div>
        <div>{currentDate}, New York</div>
      </div>
      <div className="header__avatar-logo">
        <div>
          <button
            className="add-clothes-button"
            type=" text"
            id="add-clothes-button"
          >
            + Add New Clothes
          </button>
        </div>
        <div>name</div>
        <div>
          <img
            className="header__logo-avatar-image"
            src="./images/Avatar.svg"
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
