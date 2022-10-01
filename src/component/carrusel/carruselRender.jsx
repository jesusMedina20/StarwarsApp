import React from "react";
import SliderLogic from "./carrusel";
import carruselStyles from "./carruselStyles.css";

function CarruselRender({ imagenes }) {
  const { imagenActual, anteriorImagen, siguienteImagen } = SliderLogic({
    imagenes,
  });
  // Return prematuro para evitar errores
  if (!Array.isArray(imagenes) || !imagenes.length) return;
  return (
    <div className="container">
      <button className="boton1" onClick={anteriorImagen}>
        ⇦
      </button>
      <img
        className="imagenPrincipal"
        src={imagenes[imagenActual]?.image}
        alt={imagenes[imagenActual]?.image}
      />
      <span className="nombre">{imagenes[imagenActual].name}</span>
      <button className="boton2" onClick={siguienteImagen}>
        ⇨
      </button>
    </div>
  );
}
export default CarruselRender;
