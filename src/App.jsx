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
import PublicRoute from "./components/PublicRoute";
import ProtectedRoute from "./components/ProtectedRoute";
function App() {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // useEffect(() => {
  //   supabase.auth.onAuthStateChange((event, session) => {
  //     setSession(session);
  //     setLoading(false);
  //   });

  //   const {
  //     data: { subscription },
  //   } = supabase.auth.onAuthStateChange((_event, session) => {
  //     setSession(session);
  //     setLoading(false);
  //   });

  //   return () => subscription.unsubscribe();
  // }, []);

  // if (loading) {
  //   return <div>Cargando apliacacion </div>;
  // }

  return (
    <>
      <CategoriProvider>
        <Routes>
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          ></Route>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/Categoria"
            element={
              <ProtectedRoute>
                <Category />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/CrearCategoria"
            element={
              <ProtectedRoute>
                <CreateCategory />
              </ProtectedRoute>
            }
          ></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </CategoriProvider>
    </>
  );
}

export default App;
