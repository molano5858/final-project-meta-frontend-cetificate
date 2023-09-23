import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Nav } from "./Components/NavBar/Nav";
import { Home } from "./Components/Home/Home";
import { Reservar } from "./Components/Reservar/Reservar";
import { AboutUs } from "./Components/AboutUs/AboutUs";
import { Menu } from "./Components/Menu/Menu";
import { ConfirmacionReserva } from "./Components/ConfirmacionReserva/ConfirmacionReserva";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservar" element={<Reservar />} />
        <Route path="/confirmacion" element={<ConfirmacionReserva />} />
      </Routes>
    </>
  );
}

export default App;
