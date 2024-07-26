// LoadingScreen.jsx
import React from 'react';
import './pantalla_carga.css'; // Opcional: para estilos personalizados
import codeina from "../statics/codeina.png";

const Carga = () => {
  return (
    <div className="loading-screen">
      <div className="spinner">
      <img src={codeina} class="img-product" alt="" />
      </div>
    </div>
  );
};

export {Carga};
