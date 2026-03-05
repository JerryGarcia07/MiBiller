import { useCategoria } from "../contexts/CategoriContext";
import * as FaIcons from "react-icons/fa";

const CategoriCard = ({ cardCate }) => {
  const { deleteCategoria } = useCategoria();
  const handleDelete = () => {
    deleteCategoria(cardCate.id);
  };
  const handleUpdate = () => {
    alert(cardCate.id, {});
  };

  const Icon = ({ name, ...props }) => {
    const DynamicIcon = FaIcons[name];
    return DynamicIcon ? <DynamicIcon {...props} /> : null;
  };

  const date = new Date(cardCate.date);
  const fechaFormateada = date.toLocaleDateString("es-ES");

  console.log(fechaFormateada);
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
