import React from "react";
import logo from "../../Assets/Images/logo Lemon yellow horizontal.png";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="container">
        <div className="container-left">
          <img className="footer-logo" src={logo} alt="Little lemon logo" />
        </div>
        <div className="container-centerLeft">
          <ul>
            <h4 className="footer-title">Doormat Navigation</h4>
            <li className="footer-link">
              <a href="/about">
                <Link to="/aboutus">About Us</Link>
              </a>
            </li>
            <li className="footer-link">
              <a href="/menu">
                <Link to="/menu">Menú</Link>
              </a>
            </li>
            <li className="footer-link">
              <a href="/reservas">
                <Link to="/reservar">Reservas</Link>
              </a>
            </li>
            {/* <li className="footer-link">
              <a href="/blog">Pedidos en linea</a>
            </li>
            <li className="footer-link">
              <a href="/login">Log In</a>
            </li> */}
          </ul>
        </div>
        <div className="container-centerRight">
          <ul>
            <h4 className="footer-title">Contact</h4>
            <li className="footer-link">Address</li>
            <li className="footer-link">Phone number</li>
            <li className="footer-link">Email</li>
          </ul>
        </div>
        <div className="container-right">
          <ul>
            <h4 className="footer-title">Social Media</h4>
            <li className="footer-link">Social Media 1</li>
            <li className="footer-link">Social Media 2</li>
            <li className="footer-link">Social Media 3</li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export { Footer };
