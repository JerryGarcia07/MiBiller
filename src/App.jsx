import "./App.css";
import { Route, Routes } from "react-router";
import Login from "./pages/Login";
import NotFound from "./pages/NotFountPage";
import Home from "./pages/Home";
import { CategoriProvider } from "./contexts/CategoriContext";
import Category from "./pages/Category";
import CreateCategory from "./pages/CreateCategory";
import PublicRoute from "./components/PublicRoute";
import ProtectedRoute from "./components/ProtectedRoute";
import { MainLayout } from "./layouts/MainLayout";
function App() {
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
              path="/Categoria/NuevaCategoria"
              element={
                <ProtectedRoute>
                  <CreateCategory />
                </ProtectedRoute>
              }
            ></Route>
            <Route
              path="/Categoria/ActualizarCategoria/:id"
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
