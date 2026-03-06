import React, { useEffect } from "react";
import { Link } from "react-router";

function CategoriSearch() {
  return (
    <div>
      <form>
        <input type="text" placeholder="Buscar texto" />
        <Link to="/Categoria/NuevaCategoria">Crear</Link>
      </form>
    </div>
  );
}

export default CategoriSearch;
