import { useNavigate } from "react-router";
import { useCategoria } from "../contexts/CategoriContext";

const CategoriCard = ({ cardCate }) => {
  const navigate = useNavigate();
  const { deleteCategoria, Icon } = useCategoria();
  const handleDelete = () => {
    deleteCategoria(cardCate.id);
  };
  const handleUpdate = () => {
    navigate(`/Categoria/ActualizarCategoria/${cardCate.id}`);
  };

  const date = new Date(cardCate.date);
  const fechaFormateada = date.toLocaleDateString("es-ES");

  return (
    <div>
      <div>
        <h1>{cardCate.name}</h1>
        <Icon name={cardCate.icon} size={24} />
      </div>
      <p>{fechaFormateada}</p>
      <button onClick={() => handleDelete()}>Delete</button>
      <button onClick={() => handleUpdate()}>Update</button>
    </div>
  );
};

export default CategoriCard;
