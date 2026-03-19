import React from "react";
import { useNavigate } from "react-router";

const BotonCreate = () => {
  const navegate = useNavigate();

  const handleCreate = () => {
    navegate(`/Movimiento/crearMovimiento`);
  };
  return <button onClick={() => handleCreate()}>Agregar</button>;
};

export default BotonCreate;
