import { useCategoria } from "../contexts/CategoriContext";

const CategoriCard = ({ cardCate }) => {
  const { deleteCategoria } = useCategoria();
  const handleDelete = () => {
    //console.log(cardCate.id);
    deleteCategoria(cardCate.id);
  };
  const handleUpdate = () => {
    alert(cardCate.id, {});
  };
  return (
    <div>
      <h1>{cardCate.name}</h1>
      <p>{cardCate.date}</p>
      <button onClick={() => handleDelete()}>Delete</button>
      <button onClick={() => handleUpdate()}>Update</button>
    </div>
  );
};

export default CategoriCard;
