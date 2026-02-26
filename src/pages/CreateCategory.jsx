import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { supabase } from "../supabase/client";
import CategoriForm from "../components/CategoriForm";
import * as FaIcons from "react-icons/fa";

const CreateCategory = () => {
  const [nameIcon, setNameIcon] = useState(null);

  const navagation = useNavigate();

  const iconNames = Object.keys(FaIcons);

  useEffect(() => {
    const checksession = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      // if (!user) {
      //   navagation("/login");
      // }
    };
    checksession();
  }, [navagation]);

  useEffect(() => {
    console.log(nameIcon);
  }, [nameIcon]);
  return (
    <div>
      <h1>CreateCategory</h1>
      <button onClick={() => supabase.auth.signOut()}>Logout</button>
      <CategoriForm />
      <div>
        {iconNames.map((iconName) => {
          const IconCompoent = FaIcons[iconName];

          return (
            <button key={iconName} onClick={() => setNameIcon(iconName)}>
              <IconCompoent size={32}></IconCompoent>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CreateCategory;
