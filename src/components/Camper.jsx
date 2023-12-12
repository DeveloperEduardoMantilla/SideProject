/* eslint-disable react/prop-types */

import { Box, Typography } from "@mui/material";
import photo from "../assets/Img/Avatar.png";
import "../assets/css/Camper.css";


export default function Camper({ data }) {

  const getSkillStyle = (skill) => {
    switch(skill.toLowerCase()){
      case "html":
        return { backgroundColor: "yellow" };
        case "css":
          return { backgroundColor: "blue" };

        default:
          return {}; // Estilo por defecto
    }
  }
  const skillsToShow = data.skills.slice(0, 5);
  return (
    <Box className="camper-card">
      <Box className="camper-img">
        <img
          src={photo}
          alt=""
        />
      </Box>
      <Box className="camper-data">
        <Typography
          variant="h5"
          className="name"
        >
          {data.nombre}
        </Typography>
        <Box className="conta-skills">
          <Typography
            variant=""
            className="nivelIngles"
          >
            Nivel Ingles:{data.nivelIngles}
          </Typography>
          <Typography
            variant=""
            className="skills"
            
          >
            {skillsToShow.map((item, index) => (
               <span key={index} style={getSkillStyle(item)} className="skillsCamper">
               {item}
              </span>
            ))}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
