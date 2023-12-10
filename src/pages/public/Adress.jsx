import { Box } from "@mui/material";
import astronauta from "../../assets/Img/Astronauta.avif"
export default function Address() {
  return (
    <>
    <Box sx={{background:"#2E4053", display:"flex", height:"350px"}}>
        <Box sx={{width:"70%"}}>
            <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.555833383871!2d-73.12853592411352!3d7.061358616677549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e683f18ef59f9a1%3A0xffbf118f3e8f20c!2sZona%20Franca%20Santander!5e0!3m2!1ses!2sco!4v1702246884206!5m2!1ses!2sco"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </Box>
        <Box sx={{display:"flex", justifyContent:"center", alignItems:"center", width:"30%"}}>
            <img src={astronauta} alt="" style={{objectFit:"cover", width:"100%", height:"100%"}}/>
        </Box>
    </Box>
    </>
  );
}
