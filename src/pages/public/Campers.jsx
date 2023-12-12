import { Box, Typography } from "@mui/material";
import Camper from "../../components/Camper.jsx";
import figura from "../../assets/Img/cuadrados.png";

export default function Campers() {
  const datosPersonas = [
    {
      nombre: "Juan",
      nivelIngles: "Avanzado",
      skills: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
    },
    {
      nombre: "Ana",
      nivelIngles: "Intermedio",
      skills: ["HTML", "CSS", "Bootstrap", "Python", "Django"],
    },
    {
      nombre: "Carlos",
      nivelIngles: "Principiante",
      skills: ["Java", "Spring Boot", "Thymeleaf", "MySQL"],
    },
    {
      nombre: "María",
      nivelIngles: "Avanzado",
      skills: ["HTML", "CSS", "JavaScript", "Vue.js", "Firebase"],
    },
    {
      nombre: "Pedro",
      nivelIngles: "Intermedio",
      skills: ["HTML", "CSS", "React", "Express.js", "MongoDB"],
    },
    {
      nombre: "Laura",
      nivelIngles: "Principiante",
      skills: ["Java", "Spring Boot", "Thymeleaf", "PostgreSQL"],
    },
    {
      nombre: "Gabriel",
      nivelIngles: "Avanzado",
      skills: ["HTML", "CSS", "JavaScript", "Angular", "Node.js"],
    },
    {
      nombre: "Elena",
      nivelIngles: "Intermedio",
      skills: ["HTML", "CSS", "Bootstrap", "Ruby", "Rails"],
    },
    {
      nombre: "Miguel",
      nivelIngles: "Principiante",
      skills: ["Java", "Spring Boot", "Thymeleaf", "SQLite"],
    },
    {
      nombre: "Sofía",
      nivelIngles: "Avanzado",
      skills: ["HTML", "CSS", "JavaScript", "React", "Express.js"],
    },
  ];

  return (
    <>
      <Box sx={{ background: "#2E3136", padding: "60px", position:"relative" }}>
        <Typography
          sx={{
            fontSize: "60px",
            fontWeight: "600",
            paddingBottom: "10px",
            color: "#fff",
          }}
        >
          Campers
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap" }}>
          {datosPersonas.map((item) => (
            <Camper data={item} key={item.nombre}/>
          ))}
        </Box>
        <img src={figura}  style={{position:"absolute", top:"0", right:"-10px", zIndex:"1"}} />
      </Box>
    </>
  );
}
