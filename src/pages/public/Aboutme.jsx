import { Box, Container, Typography } from "@mui/material";
import photo from "../../assets/Img/img33.jpg";
import figura from "../../assets/Img/figura.png";
import PersonIcon from "@mui/icons-material/Person";

export default function Aboutme() {
  return (
    <Box id="aboutme" sx={{ width:"100%", padding: {xs:"60px 0", md:"120px 0"}, position: "relative" }}>
      <Container>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: { xs: "center", md: "space-around" },
            flexWrap: "wrap",
          }}
        >
          <Box sx={{ width: { xs: "100%", md:"800px", lg:"600px"  } }}>
            <Typography
              sx={{
                fontSize: { xs: "30px", sm:"30px", md: "35px", lg: "40px" },
                textAlign:{xs:"center", lg:"start"},
                fontWeight: "800",
                lineHeight:"40px",
                color: "#34495E",
              }}
            >
              Más de 10 años de experiencia
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "14px", md: "15px", lg: "16px" },
                paddingTop: "15px",
                textAlign: { xs: "justify", md: "justify", ld: "start" },
                background:"#fff"
              }}
            >
              Nuestro objetivo es aumentar la productividad del sector de la
              construcción facilitando un trabajo colaborativo efectivo y la
              digitalización de procesos de forma sencilla, fiable y rentable.
            </Typography>
          </Box>
          <Box
            sx={{
              width: {xs: "100%", md: "800px", lg: "450px" },
              height:{xs:"200px", md:"250px"},
              margin:{xs:"10px 0 ", md:"0"},
              paddingTop: { xs: "25px", lg: "0"},
            }}
          >
            <img
              src={photo}
              width="100%"
              style={{
                boxShadow: "5px 10px 15px rgba(0,0,0,0.3)",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </Box>
        </Box>
      </Container>
      <img
        src={figura}
        width="200px"
        style={{ position: "absolute", top: "200px", left: "-150px" }}
      />
      <img
        src={figura}
        width="200px"
        style={{ position: "absolute", top: "10px", right: "-150px" }}
      />
    </Box>
  );
}
