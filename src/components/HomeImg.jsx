import { Box, Button, Typography } from "@mui/material";
import imgHome from "../assets/Img/Slider.png";
export default function HomeImg() {
  return (
    <>
      <Box sx={{ width: "100%", position:"relative", height:"50vh"}}>
        <Box sx={{background:"rgba(46, 64, 83,0.4)", width:"100%", minHeight:"100%", position:"absolute", top:"0"}} />
        <img src={imgHome} style={{width:"100%", objectFit:"cover", maxWidth:"100%", height:"50vh", objectPosition:"top"}} />
        <Box sx={{background:"rgba(46, 64, 83,0.4)", width:"100%", minHeight:"100%", position:"absolute", top:"0", display:"flex", justifyContent:"center", flexDirection:"column", alignItems:"center"}}>
          <Typography variant="h4" sx={{color:"white", fontWeight:"800", fontSize:"60px", fontWeight:"800", color:"#eeedf0"}}>CampusLands</Typography>
          <Typography variant="h6" sx={{color:"white", fontSize:"20px", fontWeight:"300", marginTop:"40px"}}>Transformamos futuros a través de la educación. Garantizamos formación en programación y empleabilidad.</Typography>
          <Button variant="contained" sx={{marginTop:"20px", background:"#2A4B9B", 
          "&:hover": {
            background:"#f2f2f2",
          },
        }}>Contactanos</Button>
        </Box>

      </Box>
    </>
  );
}
