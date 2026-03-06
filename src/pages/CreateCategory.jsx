import { useNavigate } from "react-router";
import { supabase } from "../supabase/client";
import CategoriForm from "../components/CategoriForm";
import CategoriIconList from "../components/CategoriIconList";
import { useEffect, useState } from "react";

const CreateCategory = () => {
  const [nameIcon, setNameIcon] = useState(null);

  const ResivirIconName = (nameIcon) => {
    setNameIcon(nameIcon);
  };

  return (
    <div>
      <h1>CreateCategory</h1>
      <CategoriForm nameIcon={nameIcon} />
      <CategoriIconList ResivirIconName={ResivirIconName} />
    </div>
  );
};

export default CreateCategory;
