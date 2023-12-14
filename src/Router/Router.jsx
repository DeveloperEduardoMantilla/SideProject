import { BrowserRouter , Routes, Route } from "react-router-dom";
import Home from "../pages/public/Home.jsx";
import Login from "../pages/admin/Login.jsx";
import { CssBaseline } from "@mui/material";
import Pruebas from "../pages/admin/Pruebas.jsx";

export default function Router() {
  return (
    <>
    <BrowserRouter>
        <CssBaseline/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/dashboard" element={<Pruebas />}/>
        </Routes>
    </BrowserRouter>
    </>
  )
}