/* eslint-disable react/prop-types */

import { Box, Typography } from "@mui/material";
import photo from "../assets/Img/Avatar.png";
import avatarMujer from "../assets/Img/AvatarMujer.png";

export default function Camper(props) {
  const { data, color } = props;

  const skillsToShow = data.skills.slice(0, 5);
  return (
    <Box className="camper_card">
      <Box
        className="camper_img"
        sx={{ background: color }}
      >
        {
          (data.genero ==="Masculino") ?  <img
          src={photo}
          alt=""
          className="camper_Img"
            /> : <img
            src={avatarMujer}
            alt=""
            className="camper_Img"
          />
        }
        
      </Box>
      <Box className="camper_data">
        <Box className="caja_informacion">
          <Typography
            variant="h5"
            className="name"
          >
            {data.nombre}
          </Typography>
          <Typography
            variant=""
            className="nivelIngles"
          >
            Developer BackEnd
          </Typography>
        </Box>

        <Box className="caja_habilidades">
          <Typography
            variant=""
            className="nivel_Ingles"
          >
            Nivel Ingles: {data.nivelIngles}
          </Typography>

          <Typography
            variant=""
            className="skills"
          >
            <Box className="caja_Skills">
              {skillsToShow.map((item, index) => (
                <span
                  key={index}
                  style={{ background: "#ccc" }}
                  className="skillsCamper"
                >
                  {item}
                </span>
              ))}
            </Box>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
