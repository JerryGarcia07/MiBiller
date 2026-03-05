import React from "react";
import { NavLink } from "react-router";
import { supabase } from "../supabase/client";

function Navbar() {
  return (
    <div>
      <li>
        <NavLink to={"/"}>Inicio</NavLink>
        <NavLink to={"/Categoria"}>Categoria</NavLink>
        <NavLink to={"/Estadistica"}>Estadistica</NavLink>
        <NavLink to={"/Perfil"}>Perfil</NavLink>
      </li>
      <button onClick={() => supabase.auth.signOut()}>Logout</button>
    </div>
  );
}

export default Navbar;
