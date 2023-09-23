import React from "react";

function ConfirmacionReserva({ datosReserva }) {
  return (
    <>
      <h1>Confirmacion reserva</h1>
      <p>{`Nombre: ${datosReserva}`}</p>
    </>
  );
}

export { ConfirmacionReserva };
