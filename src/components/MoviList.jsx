import React, { useEffect } from "react";
import { useCategoria } from "../contexts/CategoriContext";

const MoviList = () => {
  const { getMovimiento, movimiento, loading } = useCategoria();

  useEffect(() => {
    getMovimiento();
    console.log(movimiento);
  }, []);

  const renderMoviList = () => {
    if (loading) {
      return (
        <div>
          <h2>Cargando.....</h2>
        </div>
      );
    } else {
      return (
        <div>
          {movimiento.map((movi) => {
            <h2></h2>;
          })}
        </div>
      );
    }
  };
  return renderMoviList();
};

export default MoviList;
