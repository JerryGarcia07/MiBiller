import { useState } from "react";
import { useCategoria } from "../contexts/CategoriContext";

const CategoriForm = () => {
  const [cateName, setCateName] = useState("");
  const [cateIcon, setCateIcon] = useState("");
  const { addCategoria, loading } = useCategoria();

  const handleSubmit = async (e) => {
    e.preventDefault();
    addCategoria(cateName, cateIcon);
  };
  return (
    <div>
      <h1>CategoriForm</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre"
          name="cateName"
          value={cateName}
          onChange={(e) => setCateName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Icono"
          name="cateIcon"
          value={cateIcon}
          onChange={(e) => setCateIcon(e.target.value)}
        />
        <button type="submit" disabled={loading}>
          {loading ? "Adding..." : "Add"}
        </button>
      </form>
    </div>
  );
};

export default CategoriForm;
