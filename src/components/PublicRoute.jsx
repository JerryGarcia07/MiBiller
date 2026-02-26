import { Navigate } from "react-router";
import { useCategoria } from "../contexts/CategoriContext";

const PublicRoute = ({ children }) => {
  const { user, loadingUser } = useCategoria();

  if (loadingUser) return <p>Cargando</p>;
  if (user) return <Navigate to={"/"} replace></Navigate>; //eliminar el !

  return children;
};
export default PublicRoute;
