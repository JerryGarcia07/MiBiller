import React from "react";
import { NavLink } from "react-router";

function Navbar() {
  return (
    <div>
      <li>
        <NavLink to={"/"}>Inicio</NavLink>
        <NavLink to={"/Categoria"}>Categoria</NavLink>
        <NavLink to={"/Estadistica"}>Estadistica</NavLink>
        <NavLink to={"/Perfil"}>Perfil</NavLink>
      </li>
    </div>
  );
}

export default Navbar;
