import React, { useEffect } from "react";
import { useCategoria } from "../contexts/CategoriContext";
import MoviCard from "./MoviCard";

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
      return (
        <div>
          {movimiento.map((movi) => {
            return <MoviCard key={movi.id} cardMovi={movi} />;
          })}
        </div>
      );
    }
  };
  return <div>{renderMoviList()}</div>;
};

export default MoviList;
