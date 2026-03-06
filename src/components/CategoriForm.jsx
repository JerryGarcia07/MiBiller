import { useEffect, useState } from "react";
import { useCategoria } from "../contexts/CategoriContext";

const CategoriForm = (nameIcon) => {
  const [cateName, setCateName] = useState("");
  const [cateIcon, setCateIcon] = useState("");
  const { addCategoria, loading, Icon } = useCategoria();

  const handleSubmit = async (e) => {
    e.preventDefault();
    addCategoria(cateName, cateIcon);
    setCateName("");
    setCateIcon("");
  };

  useEffect(() => {
    setCateIcon(nameIcon.nameIcon);
  }, [nameIcon]);

  return (
    <div>
      <h1>CategoriForm</h1>
      <Icon name={nameIcon.nameIcon} size={24} />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre"
          name="cateName"
          value={cateName}
          onChange={(e) => setCateName(e.target.value)}
        />

        <button type="submit" disabled={loading}>
          {loading ? "Adding..." : "Add"}
        </button>
      </form>
    </div>
  );
};

export default CategoriForm;
