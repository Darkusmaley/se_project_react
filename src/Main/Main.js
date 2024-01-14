import "./Main.css";

const Main = () => {
  console.log("main");
  return (
    <main className="main">
      <section className="weather" id="weather">
        <div className="weather__info">75°F</div>
        <img src="../images/Sunny.svg" className="weather__image" />
      </section>
      <section id="card-section">card-section</section>
    </main>
  );
};

export default Main;
