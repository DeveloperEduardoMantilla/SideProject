import { Box, Container, Typography } from "@mui/material";
import photo from "../../assets/Img/Img1.jpg";

export default function Aboutme() {
  return (
    <Box sx={{width:"100%", padding:"60px 0"}}>
      <Container>
        <Typography variant="h6" sx={{textAlign:"center", fontSize:"40px", fontWeight:"600", }}>
          Quienes Somos
        </Typography>
        <Box sx={{display:"flex", paddingTop:"30px", alignItems:"center", justifyContent:"space-between"}}>
          <Box sx={{width:"55%"}}>
          <Typography sx={{fontSize:"20px"}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae dolor, voluptatum reiciendis nulla ex voluptatibus quis debitis! Accusamus laboriosam possimus iure beatae incidunt, odio obcaecati repellat natus enim quasi fugiat!</Typography>
          </Box>
          <Box sx={{width:"40%"}}>
              <img  src={photo} width="100%" style={{borderRadius:"10px", boxShadow:"5px 5px 15px gray", height:"100%", objectFit:"cover", objectPosition:"top"}}/>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
