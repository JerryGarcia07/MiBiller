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
import Navbar from "./components/Navbar";
import { MainLayout } from "./layouts/MainLayout";
function App() {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

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
            element={
              <ProtectedRoute>
                <MainLayout />
              </ProtectedRoute>
            }
          >
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
          </Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </CategoriProvider>
    </>
  );
}

export default App;
