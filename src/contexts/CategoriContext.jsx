import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../supabase/client";
import * as FaIcons from "react-icons/fa";

export const CategoriContext = createContext();

export const useCategoria = () => {
  const context = useContext(CategoriContext);
  if (!context)
    throw new Error("useCategoria must be used within a CategoriProvider");
  return context;
};

export const CategoriProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [movimiento, setMovimiento] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingMovi, setLoadingMovi] = useState(false);
  const [Adding, setAdding] = useState(false);

  const [user, setUser] = useState(null);
  const [loadingUser, setLoadingUser] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setUser(data.session?.user ?? null);
      setLoadingUser(false);
    });

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null);
        setLoadingUser(false);
      },
    );

    return () => listener.subscription.unsubscribe();
  }, []);

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

  const getCategorie = async (id) => {
    setLoading(true);
    const {
      data: { user },
    } = await supabase.auth.getUser();

    const { error, data } = await supabase
      .from("Categoria")
      .select()
      .eq("id", id)
      .eq("user", user.id)
      .order("date", { ascending: true })
      .single();
    if (error) throw error;
    setLoading(false);
    return data;
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

  const addMovimiento = async (
    moveName,
    moveType,
    moveRepet,
    moveNota,
    moveCategori,
  ) => {
    setLoading(true);
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      const { error, data } = await supabase.from("Movimiento").insert({
        name: moveName,
        type: moveType,
        repeat: moveRepet,
        note: moveNota,
        user: user.id,
        category_id: moveCategori,
      });
      if (error) throw error;
      getMovimiento();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
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

  const Icon = ({ name, ...props }) => {
    const DynamicIcon = FaIcons[name];
    return DynamicIcon ? <DynamicIcon {...props} /> : null;
  };

  const getMovimiento = async () => {
    setLoadingMovi(true);
    const {
      data: { user },
    } = await supabase.auth.getUser();

    const { error, data } = await supabase
      .from("Movimiento")
      .select()
      .eq("user", user.id)
      .order("created_at", { ascending: true });
    if (error) throw error;
    setMovimiento(data);
    setLoadingMovi(false);
  };

  return (
    <CategoriContext.Provider
      value={{
        categories,
        movimiento,
        getCategories,
        getCategorie,
        addCategoria,
        deleteCategoria,
        updateCategoria,
        getMovimiento,
        loading,
        loadingMovi,
        Adding,
        user,
        loadingUser,
        Icon,
      }}
    >
      {children}
    </CategoriContext.Provider>
  );
};
