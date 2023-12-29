import HomeImg from "../../components/public/home/HomeImg.jsx";
import Aboutme from "../../components/public/home/Aboutme.jsx";
import Campers from "../../components/public/home/Campers.jsx";
import Contact from "../../components/public/home/Contact.jsx";
import SuccessStories from "../../components/public/home/SuccessStories.jsx";
import Adress from "../../components/public/home/Adress.jsx";
import Footer from "../../components/shared/Footer.jsx";
import { Box } from "@mui/material";
import Header from "../../components/shared/Header.jsx";
import Chat from "../../components/shared/Chat.jsx";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import WhatsAppButton from "../../components/shared/WhatsAppButton.jsx";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 3000, once: true });
  });
  return (
    <>
      <Box sx={{ position: "relative" }}>
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
        <WhatsAppButton />
      </Box>
    </>
  );
}
