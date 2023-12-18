import { Box, Container, Typography } from "@mui/material";
import Experience from "../../components/admin/admin/cv/Experience.jsx";
import avatarHombre from "../../../src/assets/Img/Avatar.png";
import avatarMujer from "../../../src/assets/Img/AvatarMujer.png";
import Education from "../../components/admin/admin/cv/Education.jsx";
import SoftSkills from "../../components/admin/admin/cv/SoftSkills.jsx";
import { useEffect, useState } from "react";
import Header from "../../components/Header.jsx";
import { useParams } from "react-router";
export default function CamperView() {
  const [dataCamper, setDataCamper] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const ruta = `http://127.17.0.97:5017/cv/user?id=${id}`;
        const campers = await fetch(ruta);
        const response = await campers.json();
        console.log(response.message);
      } catch (e) {
        console.log("Error => ", e);
      }
    };
    fetchData();
  }, []);

  // const softSkills = [
  //   {
  //     title: "Html",
  //   },
  //   {
  //     title: "Css",
  //   },
  //   {
  //     title: "Js",
  //   },
  //   {
  //     title: "React",
  //   },
  //   {
  //     title: "Node Js",
  //   },
  //   {
  //     title: "MySql",
  //   },
  //   {
  //     title: "MongoDB",
  //   },
  //   {
  //     title: "Java",
  //   },
  // ];
  return (
    <>
      <Header />
      <Box sx={{ position: "relative" }}>
        <Box sx={{ background: "#2A4B9B", height: "200px" }}></Box>
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
                <Box sx={{ display: "flex" }}>
                  <img
                    src={dataCamper &&
                      dataCamper.info_usuario &&
                      JSON.parse(dataCamper.info_usuario).genero==="femenino"?avatarMujer : avatarHombre}
                    alt=""
                    style={{ with: "100px", height: "100px" }}
                  />
                  <Box sx={{ margin: "0px 30px" }}>
                    <Typography
                      variant="h4"
                      sx={{ fontWeight: "600", color: "#34495E" }}
                    >
                      {dataCamper.nombre}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        marginTop: "10px",
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: "400",
                          fontSize: "15px",
                          color: "#fff",
                          background: "#2A4B9B",
                          borderRadius: "10px",
                          padding: "8px 10px",
                        }}
                      >
                        {dataCamper &&
                          dataCamper.info_usuario &&
                          JSON.parse(dataCamper.info_usuario).correo}
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: "400",
                          fontSize: "15px",
                          marginLeft: "20px",
                          color: "#fff",
                          background: "#2A4B9B",
                          borderRadius: "10px",
                          padding: "8px 10px",
                        }}
                      >
                        {dataCamper &&
                          dataCamper.info_usuario &&
                          JSON.parse(dataCamper.info_usuario).telefono}
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: "400",
                          fontSize: "15px",
                          marginLeft: "20px",
                          color: "#fff",
                          background: "#2A4B9B",
                          borderRadius: "10px",
                          padding: "8px 10px",
                        }}
                      >
                        Ciudad{" "}
                        {dataCamper &&
                          dataCamper.info_usuario &&
                          JSON.parse(dataCamper.info_usuario).ciudad}
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
                  {dataCamper.acercaDeMi}
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
                    dataCamper.skills &&
                    JSON.parse(dataCamper.skills).map((item, index) => (
                      <SoftSkills
                        data={item}
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
                  Educacion
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  {/* {dataCamper &&
                    dataCamper.skills &&
                    JSON.parse(dataCamper.skills).map((item, index) => (
                      <SoftSkills
                        data={item}
                        key={index}
                      />
                    ))} */}
                  <Education />
                  <Education />
                  <Education />
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
                  <Experience />
                  <Experience />
                  <Experience />
                </Box>
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  );
}
