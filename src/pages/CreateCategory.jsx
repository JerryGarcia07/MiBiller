import { useNavigate } from "react-router";
import { supabase } from "../supabase/client";
import CategoriForm from "../components/CategoriForm";
import CategoriIconList from "../components/CategoriIconList";

const CreateCategory = () => {
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

  return (
    <div>
      <h1>CreateCategory</h1>

      <CategoriForm />
      <CategoriIconList />
    </div>
  );
};

export default CreateCategory;
