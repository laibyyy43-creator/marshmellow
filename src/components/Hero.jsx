import heroImage from "../assets/Dresses/picture 1.jpg";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-small-text">WELCOME TO MARSHMELLOW</p>

        <h1>
          Sweet Dresses
          <br />
          For Little Girls
        </h1>

        <p className="hero-description">
          Discover beautiful, comfortable and adorable dresses
          made for every special little moment.
        </p>

        <button className="hero-button">
          SHOP NOW
        </button>
      </div>

      <div className="hero-image">
        <div className="hero-image-card">
          <img
            src={heroImage}
            alt="Princess dress collection"
          />
          <div className="hero-badge">New Arrival</div>
        </div>
      </div>
    </section>
  );
}

export default Hero;