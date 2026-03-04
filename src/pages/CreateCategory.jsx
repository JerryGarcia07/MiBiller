import { useNavigate } from "react-router";
import { supabase } from "../supabase/client";
import CategoriForm from "../components/CategoriForm";
import CategoriIconList from "../components/CategoriIconList";
import { useEffect, useState } from "react";

const CreateCategory = () => {
  const [nameIcon, setNameIcon] = useState(null);
  const navagation = useNavigate();

  // useEffect(() => {
  //   const checksession = async () => {
  //     const {
  //       data: { user },
  //     } = await supabase.auth.getUser();
  //     // if (!user) {
  //     //   navagation("/login");
  //     // }
  //   };
  //   checksession();
  // }, [navagation]);

  const ResivirIconName = (nameIcon) => {
    setNameIcon(nameIcon);
  };

  useEffect(() => {
    console.log(nameIcon);
  }, [nameIcon]);

  return (
    <div>
      <h1>CreateCategory</h1>

      <CategoriForm nameIcon={nameIcon} />
      <CategoriIconList ResivirIconName={ResivirIconName} />
    </div>
  );
};

export default CreateCategory;
