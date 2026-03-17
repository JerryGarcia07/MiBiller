import { useEffect } from "react";
import { useNavigate } from "react-router";
import { supabase } from "../supabase/client";
import CategoriForm from "../components/CategoriForm";
import CategoriList from "../components/CategoriList";
import MoviList from "../components/MoviList";
import { useCategoria } from "../contexts/CategoriContext";

const Home = () => {
  const { movimiento } = useCategoria();

  const HomeVisit = () => {
    if (movimiento.lenght === 0) {
      return (
        <div>
          <h1>¡Bienvenido a tu gestor de gastos!</h1>
          <p>
            Empieza a organizar tus finanzas de forma sencilla y mantén tus
            gastos bajo control.
          </p>
          <button>Agregar</button>
        </div>
      );
    } else {
      return <MoviList />;
    }
  };

  return HomeVisit();
};

export default Home;
