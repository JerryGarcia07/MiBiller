import { useEffect, useState } from "react";
import { supabase } from "../supabase/client";
import { useNavigate } from "react-router";

const Login = () => {
    const [email, setEmail] = useState('');
    const navagation=useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(email);

        try {
            const result = await supabase.auth.signInWithOtp({ email });
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(()=>{
        const checksession=async()=>{
            const {data:{user}}=await supabase.auth.getUser();
            console.log(user)
            if(user){
                navagation('/');
            }
        }
        checksession();
    },[])

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;