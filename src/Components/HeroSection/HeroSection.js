import React from "react";
import "./HeroSection.css";

function HeroSection() {
  return (
    <>
      <section className="main-heroSection">
        <div className="main-heroSection-container-left">
          <h1 className="main-heroSection-title">Little lemon</h1>
          <h4 className="main-heroSection-subtitle">Chicago</h4>
          <p className="main-heroSection-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            rhoncus convallis risus, ut ultricies risus congue nec. Ut eleifend
            accumsan nibh tincidunt finibus. Nullam gravida dapibus accumsan.
          </p>
          <button className="main-heroSection-button">Reservar una mesa</button>
        </div>
        <div className="main-heroSection-container-right">
          <img
            className="main-heroSection-image"
            src="https://img.freepik.com/free-photo/hands-holding-bowl-fajita-mexican-food_181624-35102.jpg?w=740&t=st=1695141531~exp=1695142131~hmac=894df1eb25b88b7e803b0bbc9b4032c49aa6040e8ff2273eddaa35608fcea6e3"
            alt="Principal dish"
          />
        </div>
      </section>
    </>
  );
}

export { HeroSection };
