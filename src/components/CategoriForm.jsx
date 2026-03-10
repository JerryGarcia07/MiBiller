import { useEffect, useState } from "react";
import { useCategoria } from "../contexts/CategoriContext";
import { useNavigate, useParams } from "react-router";

const CategoriForm = (nameIcon) => {
  const [cateName, setCateName] = useState("");
  const [cateIcon, setCateIcon] = useState("");
  const { addCategoria, loading, Icon, updateCategoria, getCategorie } =
    useCategoria();
  const { id } = useParams();
  const navegate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      updateCategoria(id, { name: cateName, icon: cateIcon });
    } else {
      addCategoria(cateName, cateIcon);
    }
    setCateName("");
    setCateIcon("");
    navegate("/Categoria");
  };

  useEffect(() => {
    if (id) {
      const loadCategori = async () => {
        const data = await getCategorie(id);
        setCateIcon(data.icon);
        setCateName(data.name);
      };
      loadCategori();
    }
  }, []);

  useEffect(() => {
    setCateIcon(nameIcon.nameIcon);
  }, [nameIcon]);

  return (
    <div>
      {loading ? (
        <div>Cragando</div>
      ) : (
        <div>
          <Icon name={cateIcon} size={24} />
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Nombre"
              name="cateName"
              value={cateName}
              onChange={(e) => setCateName(e.target.value)}
            />

            <button type="submit" disabled={loading}>
              {id
                ? loading
                  ? "Updating..."
                  : "Update"
                : loading
                  ? "Adding..."
                  : "Add"}
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default CategoriForm;
