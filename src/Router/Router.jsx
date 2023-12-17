import { BrowserRouter , Routes, Route } from "react-router-dom";
import Home from "../pages/public/Home.jsx";
import Login from "../pages/admin/Login.jsx";
import { CssBaseline } from "@mui/material";
import Registred from "../pages/admin/Registred.jsx";
import DashboardTest from "../pages/admin/DashboardTest.jsx";
import Profile from "../components/admin/admin/Profile.jsx";

export default function Router() {
  return (
    <>
    <BrowserRouter>
        <CssBaseline/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/registred" element={<Registred/>}/>
            <Route path="/dashboard" element={<DashboardTest />}/>
            <Route path="/profile" element={<Profile/>}/>

        </Routes>
    </BrowserRouter>
    </>
  )
}