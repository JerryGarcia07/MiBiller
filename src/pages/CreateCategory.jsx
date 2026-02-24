import { useEffect } from "react";
import { useNavigate } from "react-router";
import { supabase } from "../supabase/client";
import CategoriForm from "../components/CategoriForm";
import * as GiIcons from "react-icons/gi";

const CreateCategory = () => {
  const navagation = useNavigate();

  const iconList = Object.entries(GiIcons);
  console.log(iconList);

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
      <div>
        {iconList.slice(0, 50).map(([name, Icon]) => (
          <button key={name} className="iconBox">
            <Icon size={30} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default CreateCategory;
