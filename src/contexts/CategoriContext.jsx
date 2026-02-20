import { createContext, useContext, useState } from "react";
import { supabase } from "../supabase/client";

export const CategoriContext = createContext();

export const useCategoria = () => {
  const context = useContext(CategoriContext);
  if (!context)
    throw new Error("useCategoria must be used within a CategoriProvider");
  return context;
};

export const CategoriProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [Adding, setAdding] = useState(false);

  const getCategories = async () => {
    setLoading(true);
    const {
      data: { user },
    } = await supabase.auth.getUser();

    const { error, data } = await supabase
      .from("Categoria")
      .select()
      .eq("user", user.id)
      .order("date", { ascending: true });
    if (error) throw error;
    setCategories(data);
    setLoading(false);
  };

  const addCategoria = async (cateName, cateIcon) => {
    setAdding(true);
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      const { error, data } = await supabase.from("Categoria").insert({
        name: cateName,
        icon: cateIcon,
        user: user.id,
      });
      if (error) throw error;
      getCategories();
    } catch (error) {
      console.log(error);
    } finally {
      setAdding(false);
    }
  };

  const deleteCategoria = async (id) => {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    const { error, data } = await supabase
      .from("Categoria")
      .delete()
      .eq("id", id)
      .eq("user", user.id);

    if (error) throw error;
    getCategories();
  };

  const updateCategoria = async (id, dateCate) => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    const { error, data } = await supabase
      .from("Categoria")
      .update(dateCate)
      .eq("user", user.id)
      .eq("id", id);
    if (error) throw error;
    getCategories();
  };

  return (
    <CategoriContext.Provider
      value={{
        categories,
        getCategories,
        addCategoria,
        deleteCategoria,
        updateCategoria,
        loading,
        Adding,
      }}
    >
      {children}
    </CategoriContext.Provider>
  );
};
