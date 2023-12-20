/* eslint-disable react/prop-types */

import { Box, Typography } from "@mui/material";
import photo from "../assets/Img/Avatar.png";
import { Link } from 'react-router-dom'; 
import avatarMujer from "../assets/Img/AvatarMujer.png";
import { useEffect } from "react";

export default function Camper(props) {
  const { data, color } = props;
  const camperUrl = `/camper/${data.idUsuario}`;

  return (
    <Link to={camperUrl} style={{ textDecoration: 'none' }}>
      <Box className="camper_card" sx={{width:{xs:"100%", sm:"250px", lg:"250px"}}}>
        <Box
          className="camper_img"
          sx={{ background: color }}
        >
          {
            JSON.parse(data.info_usuario).genero ==="masculino" ?  <img
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
              {JSON.parse(data.enfoque).nombre}
            </Typography>
          </Box>

          <Box className="caja_habilidades">
            <Typography
              variant=""
              className="nivel_Ingles"
            >
              {data.idioma}  {data.nivelIdioma}
            </Typography>

            <Typography
              variant=""
              className="skills"
            >
              <Box className="caja_Skills">
                 {JSON.parse(data.skills).map((item, index) => (
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
    </Link>
  );
}
