/* eslint-disable react/prop-types */

import { Box, Typography } from "@mui/material";
import photo from "../assets/Img/Avatar.png";
import "../assets/css/Camper.css";

export default function Camper({ data }) {
  const getSkillStyle = (skill) => {
    switch (skill.toLowerCase()) {
      case "html":
        return { backgroundColor: "#D4AC0D" };
      case "css":
        return { backgroundColor: "#2E86C1" };
      case "javascript":
        return { backgroundColor: "#D4AC0D" };
      case "react":
        return { backgroundColor: "#117A65 " };
      case "node.js":
        return { backgroundColor: "#D4AC0D" };
      case "django":
        return { backgroundColor: "#2E86C1" };
      case "firebase":
      return { backgroundColor: "#2E86C1" };
      case "mysql":
        return { backgroundColor: "#D4AC0D" };
      case "vue.js":
        return { backgroundColor: "#2E86C1" };
      case "bootstrap":
        return { backgroundColor: "#7D3C98" };
      case "python":
      return { backgroundColor: "#F7DC6F" };
      case "javaspring":
        return { backgroundColor: "#2ECC71" };
      case "java":
        return { backgroundColor: "#CB4335" };
      case "angular":
        return { backgroundColor: "#CB4335" };
      case "express.js":
        return { backgroundColor: "#196F3D" };
      case "mongodb":
      return { backgroundColor: "#2E86C1" };
      case "ruby":
        return { backgroundColor: "#E74C3C" };
      case "postgresql":
        return { backgroundColor: "#21618C" };
      case "python":
      return { backgroundColor: "#F7DC6F" };
      default:
        return {backgroundColor: "#ccc"};
    }
  };
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
            className="nivelIngles"
          >
            Developer BackEnd
          </Typography>
          <Typography
            variant=""
            className="skills"
          >
            {skillsToShow.map((item, index) => (
              <span
                key={index}
                style={getSkillStyle(item)}
                className="skillsCamper"
              >
                {item}
              </span>
            ))}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
