import { Box, Container, Typography } from "@mui/material";
import Experience from "../../components/admin/admin/cv/Experience.jsx";
import avatarHombre from "../../../src/assets/Img/Avatar.png";
import avatarMujer from "../../../src/assets/Img/AvatarMujer.png";
import Education from "../../components/admin/admin/cv/Education.jsx";
import SoftSkills from "../../components/admin/admin/cv/SoftSkills.jsx";
import { useEffect, useState } from "react";
import Header from "../../components/Header.jsx";
import HeaderCamperView from "../../components/HeaderCamperView.jsx";
import { useParams } from "react-router";
export default function CamperView() {
  const [dataCamper, setDataCamper] = useState([]);
  const { id } = useParams();
  const validateLocal = localStorage.getItem("token");

  useEffect(() => {
    const fetchData = async () => {
      try {
        let options = {
          method: "GET",
          headers: new Headers({
            "Content-Type": "application/json",
          }),
        };
        const sever = JSON.parse(import.meta.env.VITE_MY_SERVER);
        const campers = await (
          await fetch(
            `http://${sever.host}:${sever.port}/cv/user?id=${id}`,
            options
          )
        ).json();
        setDataCamper(campers.message);
        console.log(campers.message);
      } catch (e) {
        console.log("Error => ", e);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {/* {!validateLocal && <Header />} */}
      <HeaderCamperView />
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
        <Box sx={{ position: "absolute", top: "70px", width: "100%" }}>
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
                    JSON.parse(dataCamper.cv.skills).map((item, index) => (
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
                    ))}
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
                    ))}
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
                    ))}
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
                    ))}
                </Box>
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  );
}
