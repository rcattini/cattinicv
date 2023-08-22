import React from "react";
import { Tarjeta } from "../tarjeta/tarjeta";
import styles from "./categoria.module.css";

const Camiseta = ( {productos} ) => {
  const productosCamiseta = productos.filter(function(producto) {
    return producto.category === 'camiseta';
  });
  return (
    <div>
      <h2>Lista de Camisetas</h2>
    <div className={styles.container}>
      {productosCamiseta.map((producto) => (
        <Tarjeta key={producto.id} producto={producto} />
      ))}
    </div>
    </div>
  );
}

export default Camiseta
