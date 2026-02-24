import React from "react";
import { Link } from "react-router";

function CategoriSearch() {
  return (
    <div>
      <form>
        <input type="text" placeholder="Buscar texto" />
        <Link to="/CrearCategoria">Crear</Link>
      </form>
    </div>
  );
}

export default CategoriSearch;
