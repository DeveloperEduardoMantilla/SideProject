import { BrowserRouter , Routes, Route } from "react-router-dom";
import {useLocation} from "react-use";
import Home from "../pages/public/Home.jsx";
import Login from "../pages/admin/Login.jsx";
import { CssBaseline } from "@mui/material";
import Registred from "../pages/admin/Registred.jsx";
import DashboardTest from "../pages/admin/DashboardTest.jsx";
import Profile from "../components/admin/admin/Profile.jsx";
import CamperView from "../pages/public/CamperView.jsx";
import ProtectedRoute from "./utils/protectedRoute";
import usePrivatizacion from "./hook/usePrivatizacion.js";
import CamperCreateCv from "../pages/admin/Camper/CamperCreateCv.jsx";
import { useEffect } from "react";

export default function Router() {
  const { stateRoutes,
    setStateRoutes } = usePrivatizacion();
  const locationRoute = useLocation()

  const activate = async () => {
    const infoLocalStorage = localStorage.getItem("token")
    if (infoLocalStorage) {
      try {
        const sever =JSON.parse(import.meta.env.VITE_MY_SERVER);
        let option = {
          method: "GET",
          headers: new Headers({
              "Content-Type": "application/json",
              "Authorization": JSON.parse(infoLocalStorage)
          })
        }
        const dataToken =  await (await fetch(`http://${sever.host}:${sever.port}/dataToken`, option)).json();
        if (dataToken.status == 200) {
          if (dataToken.message.payload.rol == "usuario") {
            setStateRoutes({
              Login: false,
              Camper: true,
              Admin: false
            })
          } else{
            setStateRoutes({
              Login: false,
              Camper: false,
              Admin: true
            })
          }
        }
      } catch (error) {
        alert(error.message)
      }
    } else {
      setStateRoutes({
        Login: true,
        Camper: false,
        Admin:false
      })
    }
  }

  useEffect(() => {
    activate();
  }, [locationRoute]);

  return (
    <>
    <BrowserRouter>
        <CssBaseline/>
        <Routes>
          <Route element={<ProtectedRoute canActivate={stateRoutes.Login} redirectPath={"/profile"} />}>
            <Route path='/' element={<Home />} />
            <Route path="/login" element={<Login/>}/>
            <Route path="/registred" element={<Registred/>}/>
            <Route path="/camper/:id" element={<CamperView/>}/>
          </Route>
         
          <Route element={<ProtectedRoute canActivate={stateRoutes.Camper} redirectPath={"/dashboard"} />}>
              <Route path="/profile" element={<Profile/>}/>
              <Route path="/camperCreateCv" element={<CamperCreateCv/>}/>
          </Route>

          <Route element={<ProtectedRoute canActivate={stateRoutes.Admin} redirectPath={"/"} />}>
            <Route path="/dashboard" element={<DashboardTest />}/>
            <Route path="/cv/:id" element={<CamperView/>}/>
          </Route>
          <Route path="*" element={<p>Error 404. Page Not Found</p>}/>
        </Routes>
    </BrowserRouter>
    </>
  )
}