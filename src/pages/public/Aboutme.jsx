import { Box, Container, Typography } from "@mui/material";
import photo from "../../assets/Img/Img1.jpg";
import figura from "../../assets/Img/figura.png";
import PersonIcon from '@mui/icons-material/Person';

export default function Aboutme() {
  return (
    <Box sx={{width:"100%", padding:"60px 0", position:"relative"}}>
      <Container>
        <Box sx={{display:"flex", paddingTop:"30px", alignItems:"center", justifyContent:"space-between"}}>
          <Box sx={{width:"55%"}}>
          <Typography sx={{fontSize:"30px"}}>
            Más de 10 años de experiencia
          </Typography>
          <Typography sx={{fontSize:"14px", paddingTop:"15px"}}>Nuestro objetivo es aumentar la productividad del sector de la construcción facilitando un trabajo colaborativo efectivo y la digitalización de procesos de forma sencilla, fiable y rentable.</Typography>
          <Box sx={{display:"flex", justifyContent:"end", alignItems:"center"}}>
              <Typography sx={{fontSize:"25px", letterSpacing:"10px", fontWeight:"600"}}>115</Typography>
              <PersonIcon sx={{fontSize:"60px", color:"#2A4B9B"}}/>
          </Box>
          </Box>
          <Box sx={{width:"40%"}}>
              <img  src={photo} width="100%" style={{boxShadow:"5px 5px 15px gray", height:"100%", objectFit:"cover", objectPosition:"top"}}/>
          </Box>
        </Box>
      </Container>
      <img src={figura} width="200px" style={{position:"absolute", top:"200px", left:"-150px"}} />
      <img src={figura} width="200px" style={{position:"absolute", top:"10px", right:"-150px"}} />
    </Box>
  );
}
