import { useEffect, useState } from "react";
import { useCategoria } from "../contexts/CategoriContext";
import { useParams } from "react-router";

const CategoriForm = (nameIcon) => {
  const [cateName, setCateName] = useState("");
  const [cateIcon, setCateIcon] = useState("");
  const { addCategoria, loading, Icon, updateCategoria } = useCategoria();
  const { id } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      updateCategoria();
    } else {
      addCategoria(cateName, cateIcon);
    }
    setCateName("");
    setCateIcon("");
  };

  useEffect(() => {
    if (id) {
    } else {
    }
  }, []);

  useEffect(() => {
    setCateIcon(nameIcon.nameIcon);
  }, [nameIcon]);

  return (
    <div>
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
