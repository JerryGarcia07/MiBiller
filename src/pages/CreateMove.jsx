import { useState } from "react";
import { useCategoria } from "../contexts/CategoriContext";

const CreateMove = () => {
  const [name, setName] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [fecha, setFecha] = useState("");
  const [repetir, setRepetir] = useState("");
  const [tipo, setTipo] = useState("");
  const [descripcion, setDescripsion] = useState("");
  const [categoria, setCategoria] = useState("");
  const { addMovimiento, loading, Icon } = useCategoria();

  const handleSumit = () => {
    e.preventDefault();
    addMovimiento();
  };
  return (
    <div>
      <h1>CreateMove</h1>
      <form>
        <input type="text" placeholder="Nombre" />
        <input type="text" placeholder="Cantidad" />
        <input type="text" placeholder="Fecha" />
        <input type="text" placeholder="Repetir" />
        <input type="text" placeholder="Tipo" />
        <textarea name="" id="" placeholder="Descripcion"></textarea>
        <button>Categoria</button>
        <button>Agregar</button>
        <button>Limpiar</button>
      </form>
    </div>
  );
};

export default CreateMove;
