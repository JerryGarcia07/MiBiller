import { useEffect, useState } from "react";
import { useCategoria } from "../contexts/CategoriContext";
import * as FaIcons from "react-icons/fa";

const CategoriForm = (nameIcon) => {
  const [cateName, setCateName] = useState("");
  const [cateIcon, setCateIcon] = useState("");
  const { addCategoria, loading } = useCategoria();

  const handleSubmit = async (e) => {
    e.preventDefault();
    addCategoria(cateName, cateIcon);
  };

  const Icon = ({ name, ...props }) => {
    const DynamicIcon = FaIcons[name];
    return DynamicIcon ? <DynamicIcon {...props} /> : null;
  };

  useEffect(() => {
    setCateIcon(nameIcon.nameIcon);
    console.log(nameIcon.nameIcon);
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
