import React from "react";
import "./input.css";

export default function Input({ value, onChange }) {
  return (
    <div className="input">
      <input value={value} onChange={onChange} placeholder="Escribe aqui" />
    </div>
  );
}
