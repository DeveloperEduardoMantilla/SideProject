import { Box, Typography } from "@mui/material";
import SuccessStorie from "../../components/SuccessStorie";
import figura from "../../assets/Img/figura.png";
import { width } from "@mui/system";

export default function SuccessStories() {
  const successStorieData = [
    {
      background: "#fff",
      colorText: "#333",
      title: "Mujeres Pioneras en Campuslands: Transformando el Futuro con Amaris",
      enterprise: "",
      content: "Mujeres de Campuslands se incorporan a la empresa multinacional Amaris para crear soluciones mediante la programación.",
    },
    {
      background: "#34495E",
      colorText: "#fff",
      title: "Diez Jóvenes, Una Ciudad: Programadores que Rompen Barreras en Bucaramanga.",
      enterprise: "",
      content: "Diez jóvenes ingresan al ámbito laboral en empresas de la ciudad de Bucaramanga, desempeñándose como programadores.",
    },
    {
      background: "#fff",
      colorText: "#333",
      title: "Conexiones Globales: Cinco Jóvenes Desarrolladores, Una Misión Remota.",
      enterprise: "",
      content: "Cinco jóvenes se unen a empresas multinacionales, trabajando de forma remota como desarrolladores.",
    },
    {
      background: "#34495E",
      colorText: "#fff",
      title: "Backend Brillante: Una Joven Programadora Conquista Empresas Estadounidenses.",
      enterprise: "",
      content: "Una joven se integra a una empresa estadounidense para crear soluciones a través de código, asumiendo el rol de programadora backend.",
    },
  ];
  return (
    <Box
      data-aos="fade-left"
      id="successStories"
      sx={{
        background: "#f8f8f8",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px 0",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontSize: "70px",
          lineHeight: "90px",
          fontWeight: "900",
          textAlign: "center",
          color: "#34495E",
          fontSize: "40px",
        }}
      >
        Casos de exito
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontSize: { xs: "14px", md: "18px" },
          textAlign: { xs: "justify", md: "center" },
          width: { xs: "80%", md: "60%" },
        }}
      >
        Empresas de todo el país ya trabajan con nosotros para crecer a gran
        escala ¡Inspírate con sus casos de éxito!
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          width: { xs: "100%", sm: "90%", lg: "100%" },
        }}
      >
        {
          successStorieData.map((item, index)=>(
            <SuccessStorie data={item} key={index} />
          ))
        }
      </Box>
      <img
        className="figura"
        src={figura}
        width="200px"
        style={{ position: "absolute", right: "-130px" }}
      />
    </Box>
  );
}
