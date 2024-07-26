import React from "react";
import "./productos.css";
import gorra from "../statics/gorra.png";

const Productos = () => {
  return (
    <div class="card">
      <div class="container-image">
      <img src={gorra} class="image-circle" />
      </div>
      <div class="content">
        <div class="detail">
          <span><b>Gorra NBA</b></span>
          <span><b>$50.000</b></span>
          <a  href="https://wa.me/+573005183772?text=Hola%20quiero%20la%20Gorra:%20referencia" target="_blank">  <button>Pedir</button></a>
        
        </div>
        <div class="product-image">
          <div class="box-image">
          <img src={gorra} class="img-product" />
          </div>
        </div>
      </div>
    </div>
  );
};

export { Productos };
