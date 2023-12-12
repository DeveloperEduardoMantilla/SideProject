import HomeImg from "../../components/HomeImg.jsx";
import Aboutme from "./Aboutme.jsx";
import Campers from "./Campers.jsx";
import Contact from "./Contact.jsx";
import SuccessStories from "./SuccessStories.jsx";
import Adress from "./Adress.jsx";
import Footer from "../../components/Footer.jsx";
import { Box } from "@mui/material";
import Header from "../../components/Header.jsx";

export default function Home() {
  return (
    <>
      <Header />
      <Box sx={{overflow:"hidden"}}>
        <HomeImg/>
        <Aboutme />
        <Campers />
        <SuccessStories/>
        <Contact/>
        <Adress/>
        <Footer/>
      </Box>
    </>
   
  )
}