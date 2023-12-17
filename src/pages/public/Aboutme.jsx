import { Box, Container, Typography } from "@mui/material";
import photo from "../../assets/Img/img33.jpg";
import figura from "../../assets/Img/figura.png";
import PersonIcon from "@mui/icons-material/Person";

export default function Aboutme() {
  return (
    <Box sx={{ width:"100%", padding: "70px 0", position: "relative" }}>
      <Container>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: { xs: "center", md: "space-around" },
            flexWrap: "wrap",
          }}
        >
          <Box sx={{ width: { xs: "100%", md: "600px",  } }}>
            <Typography
              sx={{
                fontSize: { xs: "19px", md: "30px", lg: "40px" },
                fontWeight: "800",
                lineHeight:"40px",
                color: "#34495E",
              }}
            >
              Más de 10 años de experiencia
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
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
              width: {xs: "100%", md: "400px", lg: "450px" },
              height:{xs:"200px", sm:"auto"},
              margin:{xs:"30px 0 ", md:"0"},
              paddingTop: { xs: "25px", sm: "0" },
            }}
          >
            <img
              src={photo}
              width="100%"
              style={{
                boxShadow: "5px 10px 15px rgba(0,0,0,0.3)",
                height: "100%",
                objectFit: "cover",
                objectPosition: "top",
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
