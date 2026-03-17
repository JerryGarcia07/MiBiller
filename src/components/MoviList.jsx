import React, { useEffect } from "react";
import { useCategoria } from "../contexts/CategoriContext";
import { MoviCard } from "./MoviCard";

const MoviList = () => {
  const { getMovimiento, movimiento, loadingMovi } = useCategoria();

  useEffect(() => {
    getMovimiento();
  }, []);

  const renderMoviList = () => {
    if (loadingMovi) {
      return (
        <div>
          <h2>Cargando.....</h2>
        </div>
      );
    } else {
      return movimiento.map((movi) => {
        <MoviCard key={movi.id} cardMovi={movi} />;
      });
    }
  };
  return <div>{renderMoviList()}</div>;
};

export default MoviList;
