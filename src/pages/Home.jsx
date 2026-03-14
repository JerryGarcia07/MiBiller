import { useEffect } from "react";
import { useNavigate } from "react-router";
import { supabase } from "../supabase/client";
import CategoriForm from "../components/CategoriForm";
import CategoriList from "../components/CategoriList";
import MoviList from "../components/MoviList";

const Home = () => {
  return (
    <div>
      <h1>¡Bienvenido a tu gestor de gastos!</h1>
      <p>
        Empieza a organizar tus finanzas de forma sencilla y mantén tus gastos
        bajo control.
      </p>
      <button>Agregar</button>
      <MoviList />
    </div>
  );
};

export default Home;
