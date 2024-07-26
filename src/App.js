import "./App.css";
import React, { useState, useEffect } from "react";
import { Productos } from "./componenetes/productos.js";
import { Carga } from "./componenetes/pantalla_carga.js";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula una carga de datos
    setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 segundos de carga simulada
  }, []);

  return (
    <div>
      {loading ? (
        <Carga />
      ) : (
        <div className="content grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 justify-items-center m-5">
          <Productos></Productos>
          <Productos></Productos>
          <Productos></Productos>
          <Productos></Productos>
          <Productos></Productos>
        </div>
      )}
    </div>
  );
}

export default App;
