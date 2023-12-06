import { BrowserRouter , Routes, Route } from "react-router-dom";
import Home from "../pages/public/Home.jsx";
import Login from "../pages/admin/Login.jsx";
import Header from "../components/Header.jsx";
import { CssBaseline } from "@mui/material";

export default function Router() {
  return (
    <>
    <BrowserRouter>
        <CssBaseline/>
        <Header />
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
        </Routes>
    </BrowserRouter>
    </>
  )
}