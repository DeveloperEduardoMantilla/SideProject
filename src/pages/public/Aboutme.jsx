import { Box, Container, Typography } from "@mui/material";
import photo from "../../assets/Img/Img1.jpg";
import figura from "../../assets/Img/figura.png";
import PersonIcon from '@mui/icons-material/Person';

export default function Aboutme() {
  return (
    <Box sx={{width:"100%", padding:"70px 0", position:"relative"}}>
      <Container>
        <Box sx={{display:"flex",  alignItems:"center", justifyContent:{xs:"center", lg:"space-between"}, flexWrap:"wrap"}}>
          <Box sx={{width:{xs:"80%", md:"600px"}}}>
          <Typography sx={{fontSize:{xs:"19px", md:"30px", lg:"40px"}, fontWeight:"800", color:"#333"}}>
            Más de 10 años de experiencia
          </Typography>
          <Typography sx={{fontSize:"16px", paddingTop:"15px", textAlign:{xs:"justify",md:"justify", ld:"start"}}}>Nuestro objetivo es aumentar la productividad del sector de la construcción facilitando un trabajo colaborativo efectivo y la digitalización de procesos de forma sencilla, fiable y rentable.</Typography>
          </Box>
          <Box sx={{width:{xs:"80%",md:"600px", lg:"450px"}, paddingTop:{xs:"25px", sm:"0"}}}>
              <img  src={photo} width="100%" style={{boxShadow:"0px 5px 10px #111", height:"100%", objectFit:"cover", objectPosition:"top"}}/>
          </Box>
        </Box>
      </Container>
      <img src={figura} width="200px" style={{position:"absolute", top:"200px", left:"-150px"}} />
      <img src={figura} width="200px" style={{position:"absolute", top:"10px", right:"-150px"}} />
    </Box>
  );
}
