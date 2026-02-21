import "./App.css";
import { Route, Routes, Navigate } from "react-router";
import Login from "./pages/Login";
import NotFound from "./pages/NotFountPage";
import Home from "./pages/Home";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { supabase } from "./supabase/client";
import { CategoriProvider } from "./contexts/CategoriContext";
import Category from "./pages/Category";
import CreateCategory from "./pages/CreateCategory";
function App() {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      setSession(session);
      setLoading(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (loading) {
    return <div>Cargando apliacacion </div>;
  }

  return (
    <>
      <CategoriProvider>
        <Routes>
          <Route
            path="/login"
            element={!session ? <Login /> : <Navigate to="/" replace />}
          ></Route>
          <Route
            path="/"
            element={session ? <Home /> : <Navigate to="/login" replace />}
          ></Route>
          <Route
            path="/Categoria"
            element={session ? <Category /> : <Navigate to="/login" replace />}
          ></Route>
          <Route
            path="/CrearCategoria"
            element={
              session ? <CreateCategory /> : <Navigate to="/login" replace />
            }
          ></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </CategoriProvider>
    </>
  );
}

export default App;
