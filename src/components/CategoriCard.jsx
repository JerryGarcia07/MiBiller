import { useCategoria } from "../contexts/CategoriContext";

const CategoriCard = ({ cardCate }) => {
  const { deleteCategoria, Icon } = useCategoria();
  const handleDelete = () => {
    deleteCategoria(cardCate.id);
  };
  const handleUpdate = () => {
    alert(cardCate.id, {});
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
