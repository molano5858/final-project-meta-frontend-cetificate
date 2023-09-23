import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/Images/logo Lemon yellow horizontal.png";
import "./Nav.css";

function Nav() {
  const [mostarBurguerMenu, setMostrarBurguerMenu] = useState(false);

  const handlerIcon = () => {
    console.log("hola");
    setMostrarBurguerMenu(!mostarBurguerMenu);
  };
  return (
    <>
      <nav className="nav-bar">
        <div
          onClick={handlerIcon}
          className={`burger-menu ${
            mostarBurguerMenu ? "showBurguerMenu" : "hideBurguerMenu"
          }`}
          id="burger-menu"
        >
          <a className="nav-link-burguer" href="#home">
            <Link to="/">Home</Link>
          </a>
          <a className="nav-link-burguer" href="#about">
            <Link to="/aboutus">About Us</Link>
          </a>
          <a className="nav-link-burguer" href="#menu">
            <Link to="/menu">Menú</Link>
          </a>
          <a className="nav-link-burguer" href="#menu">
            <Link to="/reservar">Reservas</Link>
          </a>
          {/* <a className="nav-link-burguer" href="#menu">
            Pedidos en linea
          </a>
          <a className="nav-link-burguer" href="#menu">
            Log In
          </a> */}
        </div>
        <img className="nav-logo" src={logo} alt="Little lemon logo" />
        <ul className="nav-list">
          <li className="nav-listItem">
            <a className="nav-link" href="/home">
              <Link to="/">Home</Link>
            </a>
          </li>
          <li className="nav-listItem">
            <a className="nav-link" href="/about">
              <Link to="/aboutus">About Us</Link>
            </a>
          </li>
          <li className="nav-listItem">
            <a className="nav-link" href="/menu">
              <Link to="/menu">Menú</Link>
            </a>
          </li>
          <li className="nav-listItem">
            <a className="nav-link" href="/reservas">
              <Link to="/reservar">Reservas</Link>
            </a>
          </li>
          {/* <li className="nav-listItem">
            <a className="nav-link" href="/blog">
              Pedidos en linea
            </a>
          </li>
          <li className="nav-listItem">
            <a className="nav-link" href="/login">
              Log In
            </a>
          </li> */}
        </ul>

        <div onClick={handlerIcon} className={`icons `} id="icons">
          <i
            className={`bx bx-menu ${
              !mostarBurguerMenu ? "showIcon" : "hideIcon"
            }`}
            id="menuIcon"
          ></i>
          <i
            className={`bx bx-x ${mostarBurguerMenu ? "showIcon" : "hideIcon"}`}
            id="menuX"
          ></i>
        </div>
      </nav>
      {}
    </>
  );
}

export { Nav };
