import { useEffect } from "react";
import { useNavigate } from "react-router";
import { supabase } from "../supabase/client";
import CategoriForm from "../components/CategoriForm";
import CategoriList from "../components/CategoriList";

const Home = () => {
  return (
    <div>
      <h1>¡Bienvenido a tu gestor de gastos!</h1>
      <p>
        Empieza a organizar tus finanzas de forma sencilla y mantén tus gastos
        bajo control.
      </p>
      <button>Agregar</button>
    </div>
  );
};

export default Home;
