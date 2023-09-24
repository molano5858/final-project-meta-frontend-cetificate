import "./Menu.css";
import { Link } from "react-router-dom";
import React from "react";

function Menu() {
  return (
    <>
      <div className="container-menu-construccion">
        <h2>Nuestro menú esta en construccioón</h2>
        <h3>Espéralo próximamente</h3>
        <img
          className="image-menu-section"
          src="https://img.freepik.com/free-photo/mouthwatering-lasagna-with-rich-bolognese-sauce-melted-mozzarella-generated-by-ai_188544-25968.jpg?t=st=1695589880~exp=1695593480~hmac=93a0b31aad23cc99bdc88416a64be8af481fa9ad1b28a3a33db955453e541773&w=826"
          alt="lasagna"
        />
        <button className="menu-button">
          <Link to={"/"}>Volver al Home</Link>
        </button>
      </div>
    </>
  );
}

export { Menu };
