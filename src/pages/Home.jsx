import { useEffect } from "react";
import { useNavigate } from "react-router";
import { supabase } from "../supabase/client";
import CategoriForm from "../components/CategoriForm";
import CategoriList from "../components/CategoriList";

const Home = () => {
    const navagation = useNavigate();

    useEffect(()=>{
        const checksession=async()=>{
            const {data:{user}}=await supabase.auth.getUser();
            if(!user){
                navagation('/login');
            }
        }
        checksession();
    },[navagation])
    return (
        <div>
            <h1>Home</h1>
            <button onClick={()=>supabase.auth.signOut()}>Logout</button>
            <CategoriForm/>
            <CategoriList/>
        </div>
    );
};


export default Home;