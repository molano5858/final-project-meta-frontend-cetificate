import React from "react";
import logo from "../Assets/Images/logo Lemon yellow horizontal.png";

function Nav() {
  return (
    <>
      <ul className="nav-list">
        <img className="nav-logo" src={logo} alt="Little lemon logo" />
        <li className="nav-listItem">
          <a className="nav-link" href="/home">
            Home
          </a>
        </li>
        <li className="nav-listItem">
          <a className="nav-link" href="/about">
            About Us
          </a>
        </li>
        <li className="nav-listItem">
          <a className="nav-link" href="/menu">
            Menú
          </a>
        </li>
        <li className="nav-listItem">
          <a className="nav-link" href="/reservas">
            Reservas
          </a>
        </li>
        <li className="nav-listItem">
          <a className="nav-link" href="/blog">
            Pedidos en linea
          </a>
        </li>
        <li className="nav-listItem">
          <a className="nav-link" href="/login">
            Log In
          </a>
        </li>
      </ul>
    </>
  );
}

export { Nav };
