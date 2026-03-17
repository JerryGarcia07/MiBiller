import React from "react";

export const MoviCard = ({ cardMovi }) => {
  return (
    <div>
      <h2>{movi.name}</h2>
      <ul>
        <li>{movi.monto}</li>
        <li>{movi.created_at}</li>
        <li>{movi.type}</li>
        <li>{movi.category_id}</li>
      </ul>
    </div>
  );
};
