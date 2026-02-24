import { useEffect } from "react";
import { useNavigate } from "react-router";
import { supabase } from "../supabase/client";
import CategoriForm from "../components/CategoriForm";

const CreateCategory = () => {
  const navagation = useNavigate();

  useEffect(() => {
    const checksession = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) {
        navagation("/login");
      }
    };
    checksession();
  }, [navagation]);
  return (
    <div>
      <h1>CreateCategory</h1>
      <button onClick={() => supabase.auth.signOut()}>Logout</button>
      <CategoriForm />
    </div>
  );
};

export default CreateCategory;
