import { Box, Button, Container, Grid, Input, Typography } from "@mui/material";
import avatarHombre from "../../../assets/Img/Avatar.png";
import avatarMujer from "../../../assets/Img/AvatarMujer.png";
import CardTextCv from "../../../components/admin/admin/cv/CardTextCv.jsx";
import HeaderCamper from "../../../components/admin/admin/cv/HeaderCamper.jsx";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

// import Experience from "../../components/admin/admin/cv/Experience";

export default function CamperView() {
  const [dataCamper, setDataCamper] = useState([]);
  const [colorTheme, setColorTheme] = useState("#2A4B9B");
  const [dataCv, setDataCv] = useState([]);
  const { id } = useParams();

  const [formData, setFormData] = useState({
    skill: "",
    soft_skill: "",
    cargo: "",
    fecha: "",
    empresa: "",
    descripcionLogros: "",
    tipo: "",
    fechaExperiencia: "",
    titulo: "",
    institucion: "",
    fechaInstitucion: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    const sever = JSON.parse(import.meta.env.VITE_MY_SERVER);

    const fetchData = async () => {
      try {
        const campers = await (
          await fetch(`http://${sever.host}:${sever.port}/usuario?id=${id}`)
        ).json();
        setDataCamper(campers.message[0]);
        console.log(campers);
        setColorTheme(
          campers.message[0].genero == "femenino" ? "#6C3483" : "#2A4B9B"
        );
      } catch (e) {
        console.log("Error => ", e);
      }
    };
    fetchData();

    // const fetchDataCv = async () => {
    //   try {
    //     const campers = await (
    //       await fetch(
    //         `http://${sever.host}:${sever.port}/cv/user?id=${id}`,
    //         options
    //       )
    //     ).json();
    //     setDataCv(campers.message);
    //   } catch (e) {
    //     console.log("Error => ", e);
    //   }
    // };
    // fetchDataCv();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Datos del formulario:", formData);

    const dataToSend = {
      tipo: formData.tipo,
      fecha: formData.fechaInstitucion,
      titulo: formData.titulo,
      institucion: formData.institucion,
      idCv: parseInt(id),
    };

    console.log(dataToSend);

    let options = {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZFVzdWFyaW8iOjMsInJvbCI6ImFkbWluIiwiaWF0IjoxNzAzMDM5NDkyLCJleHAiOjE3MDMwNTAyOTJ9.10rGrWgyYgQ_2Xa6mck4rAEVUVMCjnJovr0KRBfAXlk",
      }),
      body: JSON.stringify(dataToSend),
    };

    const sever = JSON.parse(import.meta.env.VITE_MY_SERVER);
    const response = await (
      await fetch(`http://${sever.host}:${sever.port}/educacion`, options)
    ).json();
    console.log(response);
  };

  return (
    <>
      <HeaderCamper />
      <Box sx={{ position: "relative" }}>
        <Box
          sx={{
            background: colorTheme,
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
                        dataCamper?.genero === "femenino"
                          ? avatarMujer
                          : avatarHombre
                      }
                      alt=""
                      style={{ with: "150px", height: "150px" }}
                    />
                  </Box>
                  <Box sx={{ margin: "0px 30px" }}>
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
                          marginRight: { xs: "0", md: "10px" },
                          marginTop: { xs: "10px", md: "0" },
                          fontWeight: "400",
                          fontSize: "15px",
                          color: "#fff",
                          background: colorTheme,
                          borderRadius: "10px",
                          padding: "8px 10px",
                        }}
                      >
                        {dataCamper?.usuario || " "}
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{
                          width: { xs: "100%", md: "auto" },
                          marginRight: { xs: "0", md: "10px" },
                          marginTop: { xs: "10px", md: "0" },
                          fontWeight: "400",
                          fontSize: "15px",
                          color: "#fff",
                          background: colorTheme,
                          borderRadius: "10px",
                          padding: "8px 10px",
                        }}
                      >
                        {dataCamper?.ciudad || " "}
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{
                          width: { xs: "100%", md: "auto" },
                          marginRight: { xs: "0", md: "10px" },
                          marginTop: { xs: "10px", md: "0" },
                          fontWeight: "400",
                          fontSize: "15px",
                          color: "#fff",
                          background: colorTheme,
                          borderRadius: "10px",
                          padding: "8px 10px",
                        }}
                      >
                        {dataCamper?.telefono || " "}
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{
                          width: { xs: "100%", md: "auto" },
                          marginRight: { xs: "0", md: "10px" },
                          marginTop: { xs: "10px", md: "0" },
                          fontWeight: "400",
                          fontSize: "15px",
                          color: "#fff",
                          background: colorTheme,
                          borderRadius: "10px",
                          padding: "8px 10px",
                        }}
                      >
                        {dataCamper?.correo || " "}
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{
                          width: { xs: "100%", md: "auto" },
                          marginRight: { xs: "0", md: "10px" },
                          marginTop: { xs: "10px", md: "0" },
                          fontWeight: "400",
                          fontSize: "15px",
                          color: "#fff",
                          background: colorTheme,
                          borderRadius: "10px",
                          padding: "8px 10px",
                        }}
                      >
                        {dataCamper?.genero || " "}
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{
                          width: { xs: "100%", md: "auto" },
                          marginTop: { xs: "10px", md: "0" },
                          fontSize: "15px",
                          color: "#fff",
                          background: "#1D8348",
                          borderRadius: "10px",
                          padding: "8px 10px",
                        }}
                      >
                        Activo
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <Box>
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
                  <Box sx={{ display: "flex" }}>
                    <CardTextCv data={"Php"} />
                    <CardTextCv data={"Node Js"} />
                    <CardTextCv data={"Js"} />
                  </Box>
                  <Box
                    component="form"
                    sx={{ margin: "30px 0 0 0" }}
                    onSubmit={handleSubmit}
                  >
                    <Grid
                      container
                      spacing={2}
                    >
                      <Grid
                        item
                        xs={12}
                        sm={6}
                        md={12}
                      >
                        <Input
                          value={formData.usuario}
                          name="skill"
                          placeholder="Php"
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        sm={6}
                        md={12}
                      >
                        <Button
                          variant="contained"
                          sx={{
                            padding: "5px",
                            marginTop: "10px",
                            background: "#2A4B9B",
                          }}
                          type="submit"
                        >
                          Guardar
                        </Button>
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
                <Box>
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
                  <Box sx={{ display: "flex" }}>
                    <CardTextCv data={"Trabajo en equipo"} />
                    <CardTextCv data={"Liderazgo"} />
                    <CardTextCv data={"Comunicacion acertiva"} />
                  </Box>
                  <Box
                    component="form"
                    sx={{ margin: "30px 0 0 0" }}
                    onSubmit={handleSubmit}
                  >
                    <Grid
                      container
                      spacing={2}
                    >
                      <Grid
                        item
                        xs={12}
                        sm={6}
                        md={12}
                      >
                        <Input
                          value={formData.soft_skill}
                          name="soft_skill"
                          placeholder="Php"
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        sm={6}
                        md={3}
                      >
                        <Button
                          variant="contained"
                          sx={{
                            padding: "5px",
                            background: "#2A4B9B",
                            marginTop: "10px",
                          }}
                          type="submit"
                        >
                          Guardar
                        </Button>
                      </Grid>
                    </Grid>
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
                  Experiencia Laboral
                </Typography>
                {/* {dataCamper &&
                  dataCamper.experiencia &&
                  dataCamper.experiencia.map((item, index) => (
                    <Experience
                      data={item}
                      color={
                        dataCamper &&
                        dataCamper.cv &&
                        JSON.parse(dataCamper.cv.info_usuario).genero ===
                          "femenino"
                          ? "#6C3483"
                          : "#2A4B9B"
                      }
                      key={index}
                    />
                  ))} */}

                <Box
                  component="form"
                  sx={{ margin: "30px 0 0 0" }}
                  onSubmit={handleSubmit}
                >
                  <Grid
                    container
                    spacing={2}
                  >
                    <Grid
                      item
                      xs={12}
                      sm={6}
                      md={3}
                    >
                      <Input
                        sx={{ width: "100%" }}
                        value={formData.cargo}
                        name="cargo"
                        placeholder="Cargo"
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      sm={6}
                      md={3}
                    >
                      <Input
                        sx={{ width: "100%" }}
                        value={formData.fecha}
                        name="fecha"
                        type="date"
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      sm={6}
                      md={3}
                    >
                      <Input
                        sx={{ width: "100%" }}
                        value={formData.empresa}
                        name="empresa"
                        placeholder="Empresa"
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      sm={6}
                      md={3}
                    >
                      <Input
                        value={formData.descripcionLogros}
                        name="descripcionLogros"
                        sx={{ width: "100%" }}
                        placeholder="Descripción y logros"
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      sm={6}
                      md={3}
                    >
                      <Button
                        variant="contained"
                        sx={{
                          padding: "5px",
                          marginLeft: "10px",
                          background: "#2A4B9B",
                          margin: "10px 0",
                        }}
                        type="submit"
                      >
                        Guardar
                      </Button>
                    </Grid>
                  </Grid>
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

                <Box
                  component="form"
                  sx={{ margin: "30px 0 0 0" }}
                  onSubmit={handleSubmit}
                >
                  <Grid
                    container
                    spacing={2}
                  >
                    <Grid
                      item
                      xs={12}
                      sm={6}
                      md={3}
                    >
                      <Input
                        fullWidth
                        sx={{ width: "100%" }}
                        value={formData.tipo}
                        name="tipo"
                        placeholder="Tipo"
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      sm={6}
                      md={3}
                    >
                      <Input
                        fullWidth
                        sx={{ width: "100%" }}
                        value={formData.fechaInstitucion}
                        name="fechaInstitucion"
                        type="date"
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      sm={6}
                      md={3}
                    >
                      <Input
                        fullWidth
                        sx={{ width: "100%" }}
                        value={formData.titulo}
                        name="titulo"
                        placeholder="Título"
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      sm={6}
                      md={3}
                    >
                      <Input
                        fullWidth
                        sx={{ width: "100%" }}
                        value={formData.institucion}
                        name="institucion"
                        placeholder="Institución"
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      sm={6}
                      md={3}
                    >
                      <Button
                        variant="contained"
                        sx={{
                          padding: "5px",
                          marginLeft: "10px",
                          background: "#2A4B9B",
                          margin: "10px 0",
                        }}
                        type="submit"
                      >
                        Guardar
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  );
}
