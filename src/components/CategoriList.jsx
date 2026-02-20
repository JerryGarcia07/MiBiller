import { useEffect } from "react";
import { useCategoria } from "../contexts/CategoriContext";
import CategoriCard from "./CategoriCard";

const CategoriList = () => {
  const { categories, getCategories, loading } = useCategoria();

  useEffect(() => {
    getCategories();
  }, []);

  const renderList = () => {
    if (loading)
      return (
        <div>
          <h2>Cargando.....</h2>
        </div>
      );
    else if (categories.lenght === 0)
      return (
        <div>
          <h2>No Categori Fount</h2>
        </div>
      );
    else
      return (
        <div>
          {categories.map((categori) => (
            <CategoriCard cardCate={categori} key={categori.id} />
          ))}
        </div>
      );
  };

  return <div>{renderList()}</div>;
};

export default CategoriList;
