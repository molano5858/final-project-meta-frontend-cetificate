import React from "react";
import "./About.css";

function About() {
  return (
    <>
      <section className="main-aboutSection" id="#about">
        <div className="main-aboutSection-container-left">
          <h1 className="main-aboutSection-title">Little lemon</h1>
          <h4 className="main-aboutSection-subtitle">Chicago</h4>
          <p className="main-aboutSection-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            rhoncus convallis risus, ut ultricies risus congue nec. Ut eleifend
            accumsan nibh tincidunt finibus. Nullam gravida dapibus accumsan.
          </p>
          {/* <button className="main-aboutSection-button">
            Reservar una mesa
          </button> */}
        </div>
        <div className="main-aboutSection-container-right">
          <img
            className="main-aboutSection-image image1"
            src="https://images.pexels.com/photos/16803393/pexels-photo-16803393/free-photo-of-comida-pizza-restaurante-cena.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Principal dish"
          />
          <img
            className="main-aboutSection-image image2"
            src="https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Principal dish"
          />
        </div>
      </section>
    </>
  );
}

export { About };
