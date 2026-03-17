import React, { useEffect, useState } from "react";
import { useCategoria } from "../contexts/CategoriContext";

const MoviCard = ({ cardMovi }) => {
  const [Icono, setIcono] = useState("");
  const { getCategorie, Icon } = useCategoria();

  useEffect(() => {
    if (cardMovi.category_id) {
      const loadinIcon = async () => {
        const data = await getCategorie(cardMovi.category_id);
        setIcono(data.icon);
      };
      loadinIcon();
    }
  }, []);

  const date = new Date(cardMovi.created_at);
  const fechaFormateada = date.toLocaleDateString("es-ES");
  return (
    <div>
      <h2>{cardMovi.name}</h2>
      <ul>
        <li>{cardMovi.monto}</li>
        <li>{fechaFormateada}</li>
        <li>{cardMovi.type ? "Imgreso" : "Gasto"}</li>
        <li>
          <Icon name={Icono}></Icon>
        </li>
      </ul>
    </div>
  );
};

export default MoviCard;
