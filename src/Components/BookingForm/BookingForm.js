import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ConfirmacionReserva } from "../ConfirmacionReserva/ConfirmacionReserva";
import "./BookingForm.css";

function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contactNumber: "",
    date: "",
    time: "00:00",
    noOfGuests: 1,
    occasion: "Occasion",
  });

  const [formValid, setFormValid] = useState(false);

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleDateChange = async (event) => {
    const { name, value } = event.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    dispatch({ type: "UPDATE_TIMES", payload: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    submitForm(formData);
  };

  useEffect(() => {
    const isFormValidUno = Object.values(formData).every(
      (value) => value !== ""
    );
    setFormValid(isFormValidUno);
    const formElement = document.getElementById("booking-form");
    const isFormValidDos = formElement.checkValidity();
    setFormValid(isFormValidUno && isFormValidDos);
  }, [formData]);

  const currentDate = new Date().toISOString().split("T")[0];

  const options = availableTimes.map((time) => (
    <option key={time}>{time}</option>
  ));

  return (
    <main className="form-container booking">
      <h2 className="form-title">Reserva tu mesa</h2>
      <h4 className="form-subtitle">
        Llena el siguiente formulario para hacer tu reserva, fácil y rápido
      </h4>
      <form id="booking-form" onSubmit={handleSubmit}>
        <label htmlFor="first-name">Nombre</label>
        <input
          type="text"
          id="first-name"
          name="firstName"
          value={formData.firstName}
          onChange={handleFormChange}
          minLength={2}
          required
        />
        <label htmlFor="last-name">Apellidos</label>
        <input
          type="text"
          id="last-name"
          name="lastName"
          value={formData.lastName}
          onChange={handleFormChange}
          minLength={2}
          required
        />
        <label htmlFor="contact-number">Número de teléfono</label>
        <input
          type="text"
          id="contact-number"
          name="contactNumber"
          placeholder="54-341-3200048"
          value={formData.contactNumber}
          onChange={handleFormChange}
          pattern="[0-9]{5,}"
        />
        <label htmlFor="res-date">Elige la fecha</label>
        <input
          type="date"
          id="res-date"
          name="date"
          value={formData.date}
          onChange={handleDateChange}
          required
          min={currentDate}
        />
        <label htmlFor="res-time">Elige la hora</label>
        <select
          id="res-time "
          name="time"
          value={formData.time}
          onChange={handleFormChange}
          required
        >
          {options}
        </select>
        <label htmlFor="guests">Numero de invitados</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          required
          id="guests"
          name="noOfGuests"
          value={formData.noOfGuests}
          onChange={handleFormChange}
        />
        <label htmlFor="occasion">¿Que vas a celebrar?</label>
        <select
          id="occasion"
          name="occasion"
          required
          value={formData.occasion}
          onChange={handleFormChange}
        >
          <option value="Occasion">Cumpleaños</option>
          <option value="Birthday">Casual</option>
          <option value="Engagement">Aniversario</option>
          <option value="Anniversary">Compromiso</option>
        </select>

        <button
          type="submit"
          value="Reserve"
          aria-label="submit button"
          disabled={!formValid}
          className="submit-button submit button clickable"
        >
          <Link to={"/confirmacion"}>Enviar</Link>
        </button>
      </form>
    </main>
  );
}

export { BookingForm };
