import React from "react";
import logo from "../Assets/Images/logo Lemon yellow horizontal.png";

function Footer() {
  return (
    <>
      <footer>
        <img width={"300px"} src={logo} alt="Little lemon logo" />
        <ul>
          <h4>Doormat Navigation</h4>
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
        <ul>
          <h4>Contact</h4>
          <li>Address</li>
          <li>Phone number</li>
          <li>Email</li>
        </ul>
        <ul>
          <h4>Social Media</h4>
          <li>Social Media 1</li>
          <li>Social Media 2</li>
          <li>Social Media 3</li>
        </ul>
      </footer>
    </>
  );
}

export { Footer };
