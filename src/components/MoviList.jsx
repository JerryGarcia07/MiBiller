import React, { useEffect } from "react";
import { useCategoria } from "../contexts/CategoriContext";

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
            <h2>{movi.name}</h2>;
            <ul>
              <li>{movi.monto}</li>
              <li>{movi.created_at}</li>
              <li>{movi.type}</li>
              <li>{movi.category_id}</li>
            </ul>;
          })}
        </div>
      );
    }
  };
  return <div>{renderMoviList()}</div>;
};

export default MoviList;
