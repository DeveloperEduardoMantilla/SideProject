import { useEffect, useState } from "react";
import { Box, Container, Typography } from "@mui/material";

//Recursos
import avatarHombre from "../../../assets/Img/Avatar.png";
import avatarMujer from "../../../assets/Img/AvatarMujer.png";

//Componentes 
import Experience from "../../../components/admin/admin/cv/Experience.jsx";
import Education from "../../../components/admin/admin/cv/Education.jsx";
import SoftSkills from "../../../components/admin/admin/cv/SoftSkills.jsx";
import HeaderCamper from "../../../components/admin/admin/cv/HeaderCamper.jsx";

//Utilidades
import {getDataCamper} from "../../../utils/apiCamper.js";

export default function Profile() {
  const [dataCamper, setDataCamper] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    try {
      const sever = JSON.parse(import.meta.env.VITE_MY_SERVER);
      const token = JSON.parse(localStorage.getItem("token"));

      let option = {
        method: "GET",
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization: token,
        }),
      };

      const datasToken = await (
        await fetch(`http://${sever.host}:${sever.port}/dataToken`, option)
      ).json();
      if (datasToken.status == 200) {
        const infoCv = await (
          await fetch(
            `http://${sever.host}:${sever.port}/cv/user?id=${datasToken.message.payload.idUsuario}`,
            option
          )
        ).json();
        if (infoCv.status == 200) {
          setDataCamper(infoCv.message);
        }
      }
    } catch (error) {
      alert(error.message);
    }
  };


  useEffect(() => {
    getData();
    setIsLoading(false);
  }, []);

  return (
    <>
      <HeaderCamper />
      <Box sx={{ position: "relative" }}>
        <Box
          sx={{
            background:
              dataCamper &&
              dataCamper.cv &&
              dataCamper.cv.info_usuario.genero === "femenino"
                ? "#6C3483"
                : "#2A4B9B",
            height: "200px",
          }}
        ></Box>
        <Box sx={{ position: "absolute", top: "0px", width: "100%" }}>
          <Container>
            <Box
              sx={{
                boxShadow: "-2px 5px 10px rgba(0,0,0,0.08)",
                marginTop: "50px",
                padding: "30px",
                background: "#fff",
              }}
            >
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                  }}
                >
                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <img
                      src={
                        dataCamper &&
                        dataCamper.cv &&
                        dataCamper.cv.info_usuario.genero === "femenino"
                          ? avatarMujer
                          : avatarHombre
                      }
                      alt=""
                      style={{ with: "150px", height: "150px" }}
                    />
                  </Box>
                  <Box sx={{ margin: "0px 30px" }}>
                    <Typography
                      variant="h4"
                      sx={{ fontWeight: "600", color: "#34495E" }}
                    >
                      {dataCamper && dataCamper.cv && dataCamper.cv.nombre}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "center",
                        marginTop: "10px",
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          width: { xs: "100%", md: "auto" },
                          marginTop: { xs: "10px", md: "0" },
                          fontWeight: "400",
                          fontSize: "15px",
                          color: "#fff",
                          background:
                            dataCamper &&
                            dataCamper.cv &&
                            dataCamper.cv.info_usuario.genero === "femenino"
                              ? "#6C3483"
                              : "#2A4B9B",
                          borderRadius: "10px",
                          padding: "8px 10px",
                        }}
                      >
                        {dataCamper &&
                          dataCamper.cv &&
                          dataCamper.cv.info_usuario.correo}
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{
                          width: { xs: "100%", md: "auto" },
                          marginTop: { xs: "10px", md: "0" },
                          fontWeight: "400",
                          fontSize: "15px",
                          marginLeft: { xs: "0", md: "20px" },
                          color: "#fff",
                          background:
                            dataCamper &&
                            dataCamper.cv &&
                            dataCamper.cv.info_usuario.genero === "femenino"
                              ? "#6C3483"
                              : "#2A4B9B",
                          borderRadius: "10px",
                          padding: "8px 10px",
                        }}
                      >
                        {dataCamper &&
                          dataCamper.cv &&
                          dataCamper.cv.info_usuario.telefono}
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{
                          width: { xs: "100%", md: "auto" },
                          marginTop: { xs: "10px", md: "0" },
                          fontWeight: "400",
                          fontSize: "15px",
                          marginLeft: { xs: "0", md: "20px" },
                          color: "#fff",
                          background:
                            dataCamper &&
                            dataCamper.cv &&
                            dataCamper.cv.info_usuario.genero === "femenino"
                              ? "#6C3483"
                              : "#2A4B9B",
                          borderRadius: "10px",
                          padding: "8px 10px",
                        }}
                      >
                        {dataCamper &&
                          dataCamper.cv &&
                          dataCamper.cv.info_usuario.ciudad}
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{
                          width: { xs: "100%", md: "auto" },
                          marginTop: { xs: "10px", md: "0" },
                          fontSize: "15px",
                          marginLeft: { xs: "0", md: "20px" },
                          color: "#fff",
                          background:
                            dataCamper &&
                            dataCamper.cv &&
                            dataCamper.cv.info_usuario.genero === "femenino"
                              ? "#6C3483"
                              : "#2A4B9B",
                          borderRadius: "10px",
                          padding: "8px 10px",
                        }}
                      >
                        {dataCamper && dataCamper.cv && dataCamper.cv.idioma}{" "}
                        {dataCamper &&
                          dataCamper.cv &&
                          dataCamper.cv.nivelIdioma}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: "600",
                    color: "#34495E",
                    marginTop: "30px",
                    fontSize: "20px",
                  }}
                >
                  Acerca de
                </Typography>
                <Typography sx={{ fontSize: "14px", textAlign: "justify" }}>
                  {dataCamper && dataCamper.cv && dataCamper.cv.acercaDeMi}
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: "600",
                    color: "#34495E",
                    marginTop: "30px",
                    fontSize: "20px",
                  }}
                >
                  Skills
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                  {dataCamper &&
                  dataCamper.cv &&
                  dataCamper.cv.skills.length > 0 ? (
                    dataCamper.cv.skills.map((item, index) => (
                      <SoftSkills
                        data={item}
                        key={index}
                        color={
                          dataCamper &&
                          dataCamper.cv &&
                          dataCamper.cv.info_usuario.genero === "femenino"
                            ? "#6C3483"
                            : "#2A4B9B"
                        }
                      />
                    ))
                  ) : (
                    <p>No se encentra skills.</p>
                  )}
                </Box>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: "600",
                    color: "#34495E",
                    marginTop: "30px",
                    fontSize: "20px",
                  }}
                >
                  Soft-Skills
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                  {dataCamper &&
                  dataCamper.skills &&
                  dataCamper.skills.length > 0 ? (
                    dataCamper.skills.map((item, index) => (
                      <SoftSkills
                        data={item.competencia}
                        key={index}
                        color={
                          dataCamper &&
                          dataCamper.cv &&
                          dataCamper.cv.info_usuario.genero === "femenino"
                            ? "#6C3483"
                            : "#2A4B9B"
                        }
                      />
                    ))
                  ) : (
                    <p>No se encuentra softSkills.</p>
                  )}
                </Box>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: "600",
                    color: "#34495E",
                    marginTop: "30px",
                    fontSize: "20px",
                  }}
                >
                  Educacion
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  {dataCamper &&
                  dataCamper.educacion &&
                  dataCamper.educacion.length > 0 ? (
                    dataCamper.educacion.map((item, index) => (
                      <Education
                        data={item}
                        color={
                          dataCamper &&
                          dataCamper.cv &&
                          dataCamper.cv.info_usuario.genero === "femenino"
                            ? "#6C3483"
                            : "#2A4B9B"
                        }
                        key={index}
                      />
                    ))
                  ) : (
                    <p>No se encuentran Educaciones</p>
                  )}
                </Box>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: "600",
                    color: "#34495E",
                    marginTop: "30px",
                    fontSize: "20px",
                  }}
                >
                  Experiencia Laboral
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  {dataCamper &&
                  dataCamper.experiencia &&
                  dataCamper.experiencia.length > 0 ? (
                    dataCamper.experiencia.map((item, index) => (
                      <Experience
                        data={item}
                        color={
                          dataCamper &&
                          dataCamper.cv &&
                          dataCamper.cv.info_usuario.genero === "femenino"
                            ? "#6C3483"
                            : "#2A4B9B"
                        }
                        key={index}
                      />
                    ))
                  ) : (
                    <p>No se encuentran Experiencias</p>
                  )}
                </Box>
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  );
}
