import "./Main.css";

const Main = () => {
  console.log("main");
  return (
    <main>
      <section className="weather" id="weather">
        <div className="weather__info">75°F</div>
        <div className="">
          <img src="../images/Sunny.svg" />
        </div>
      </section>
      <section id="card-section">card-section</section>
    </main>
  );
};

export default Main;
