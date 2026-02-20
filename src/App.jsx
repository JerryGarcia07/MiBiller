import './App.css'
import { Route, Routes } from 'react-router';
import Login from './pages/Login';
import NotFound from './pages/NotFountPage';
import Home from './pages/Home';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { supabase } from './supabase/client';
import { CategoriProvider } from './contexts/CategoriContext';
function App() {
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      if (!session) {
        navigate('/login');
      } else {
        navigate('/');
      }
    });
  },[]);

  return (
    <>
    <CategoriProvider>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
    </CategoriProvider>
    </>
  )
}

export default App
