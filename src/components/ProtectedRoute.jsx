import { Navigate } from "react-router";
import { useCategoria } from "../contexts/CategoriContext";

const ProtectedRoute = ({ children }) => {
  const { user, loadingUser } = useCategoria();

  if (loadingUser) return <p>Cargando</p>;
  if (!user) return <Navigate to={"/login"} replace></Navigate>; //agregar el !

  return children;
};
export default ProtectedRoute;
