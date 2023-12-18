import HomeImg from "../../components/HomeImg.jsx";
import Aboutme from "./Aboutme.jsx";
import Campers from "./Campers.jsx";
import Contact from "./Contact.jsx";
import SuccessStories from "./SuccessStories.jsx";
import Adress from "./Adress.jsx";
import Footer from "../../components/Footer.jsx";
import { Box } from "@mui/material";
import Header from "../../components/Header.jsx";
import Chat from "../../components/Chat.jsx";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import WhatsAppButton from "../../components/WhatsAppButton.jsx";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 3000,  once: true });
  });
  return (
    <>
      <Box sx={{position:"relative"}}>
      <Header />
      <Box sx={{ overflow: "hidden" }}>
        <HomeImg />
        <Aboutme />
        <Campers />
        <SuccessStories />
        <Contact />
        <Adress />
        <Footer />
        <Chat />
      </Box>
      <WhatsAppButton/>
      </Box>
    </>
  );
}
