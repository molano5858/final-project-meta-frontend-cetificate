import React from "react";
import logo from "../Assets/Images/logo Lemon yellow horizontal.png";

function Nav() {
  return (
    <>
      <ul>
        <img width={"300px"} src={logo} alt="Little lemon logo" />
        <li>
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/about">About Us</a>
        </li>
        <li>
          <a href="/menu">Menú</a>
        </li>
        <li>
          <a href="/reservas">Reservas</a>
        </li>
        <li>
          <a href="/blog">Pedidos en linea</a>
        </li>
        <li>
          <a href="/login">Log In</a>
        </li>
      </ul>
    </>
  );
}

export { Nav };
