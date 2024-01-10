//Utilidades
import { useEffect, useState } from "react";
import { Box, Button, Container, Grid, Input, Typography } from "@mui/material";
import { getDataCamper } from "../../../utils/apiCamper.js";

//Recursos
import avatarHombre from "../../../assets/Img/Avatar.png";
import avatarMujer from "../../../assets/Img/AvatarMujer.png";

//Componentes
import CardTextCv from "../../../components/admin/admin/cv/CardTextCv.jsx";
import HeaderCamper from "../../../components/admin/admin/cv/HeaderCamper.jsx";

import Experience from "../../../components/admin/admin/cv/Experience.jsx";
import Education from "../../../components/admin/admin/cv/Education.jsx";

export default function CamperView() {
  const [dataCamper, setDataCamper] = useState([]);
  const [colorTheme, setColorTheme] = useState("#2A4B9B");
  const [infoCamper, setInfoCamper] = useState({});
  const [loading, setLoading] = useState(false);
  const [reloadData, setReloadData] = useState(false);

  const [formData, setFormData] = useState({
    dataSkills: {
      skills:""
    },
    softSkills: {
      compentencia: "",
    },
    experienceWork:{
      cargo:"",
      fecha:"",
      empresa:"",
      descripcionLogros:""
    },
    education:{
      tipo: "",
      fecha: "",
      titulo: "",
      institucion: ""
    }
  });

  const handleChange = (e, formName) => {
    setFormData({
        ...formData,
        [formName]: {
          ...formData[formName],
          [e.target.name]: e.target.value,
        },
      });
  };

  const handleSubmit = async (e, formName) => {
    try {
      e.preventDefault();
      
      let endpoint = '';
      let peticion = 'POST';
      switch (formName) {
        case 'dataSkills':
          endpoint = `cv?id=${infoCamper.cv.id}`;
          peticion = 'PUT';
          break;
        case 'softSkills':
          endpoint = 'skills';
          break;  
        case 'experienceWork':
          endpoint = 'experiencia';
          break;
        case 'education':
          endpoint = 'educacion';
          break;
      }
      
      const token = JSON.parse(localStorage.getItem("token"));
      const server = JSON.parse(import.meta.env.VITE_MY_SERVER);

      let formDataForEndpoint= formData[formName];
      let combinedSkills = [];

      if(formName==='dataSkills'){
        formDataForEndpoint = { [formName]: formData[formName]};
        combinedSkills = [...infoCamper.cv.skills, formDataForEndpoint.dataSkills.skills];
        formDataForEndpoint={skills:combinedSkills};
      }

      const options ={ 
        method: peticion,
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        body: JSON.stringify(formDataForEndpoint),
      };
      const response = await fetch(
        `http://${server.host}:${server.port}/${endpoint}`,options
      );

      if (response.ok) {
        setReloadData(true);
      }
      e.target.reset();
    } catch (error) {
      console.error(`Error en la petición del formulario ${formName}`, error);
    }
  };

  const getInfo = async () => {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const result = await getDataCamper(token);
      setInfoCamper(result);

      if (result && result.cv && result.cv.skills) {
        setFormData({
          ...formData,
          skills: result.cv.skills.map(skill => skill),
        });
      }
    } catch (error) {
      alert(error.message);
    }
    
  };

  useEffect(() => {
    getInfo();
    setLoading(true);
    setReloadData(false);
  },[reloadData]);

  return (
    <>
      {loading ? (
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
                        <Typography
                          variant="h6"
                          sx={{
                            width: { xs: "100%", md: "auto" },
                            marginRight: { xs: "0", md: "10px" },
                            marginTop: { xs: "10px", md: "0" },
                            fontWeight: "600",
                            fontSize: "34px",
                            lineHeight: "42px",
                            color: "#34495e",
                            textTransform: "uppercase",
                            borderRadius: "10px",
                          }}
                        >
                          {infoCamper.cv?.nombre || " "}
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
                            {infoCamper && infoCamper.cv && infoCamper.cv.info_usuario?.ciudad || " "}
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
                            {infoCamper && infoCamper.cv && infoCamper.cv.info_usuario?.telefono || " "}
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
                            {infoCamper && infoCamper.cv && infoCamper.cv.info_usuario?.correo || " "}
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
                            {infoCamper && infoCamper.cv && infoCamper.cv.info_usuario?.genero || " "}
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
                        {infoCamper.cv?.skills &&
                          infoCamper.cv.skills.map((item, index) => (
                            <CardTextCv
                              data={item}
                              key={index}
                            />
                          ))}
                      </Box>
                      <Box
                        component="form"
                        sx={{ margin: "30px 0 0 0" }}
                        onSubmit={(e) => handleSubmit(e, "dataSkills")}
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
                              name="skills"
                              placeholder="Php"
                              onChange={(e) => handleChange(e, "dataSkills")}
                              required
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
                      <Box sx={{ display: "flex", flexWrap:"wrap" }}>
                        {infoCamper.skills &&
                          infoCamper.skills.map((item, index) => (
                            <CardTextCv
                              data={item.competencia}
                              key={index}
                            />
                          ))}
                      </Box>
                      <Box
                        component="form"
                        sx={{ margin: "30px 0 0 0" }}
                        onSubmit={(e) => handleSubmit(e, "softSkills")}
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
                              name="compentencia"
                              placeholder="Php"
                              onChange={(e) => handleChange(e, "softSkills")}
                              required
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
                    {infoCamper.experiencia &&
                      infoCamper.experiencia.map((item, index) => (
                        <Experience
                          data={item}
                          color={colorTheme}
                          key={index}
                        />
                      ))}
                    <Box
                      component="form"
                      sx={{ margin: "30px 0 0 0" }}
                      onSubmit={(e) => handleSubmit(e, "experienceWork")}
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
                            name="cargo"
                            placeholder="Cargo"
                            onChange={(e) => handleChange(e, "experienceWork")}
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
                            name="fecha"
                            type="date"
                            onChange={(e) => handleChange(e, "experienceWork")}
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
                            name="empresa"
                            placeholder="Empresa"
                            onChange={(e) => handleChange(e, "experienceWork")}
                          />
                        </Grid>
                        <Grid
                          item
                          xs={12}
                          sm={6}
                          md={3}
                        >
                          <Input
                            name="descripcionLogros"
                            sx={{ width: "100%" }}
                            placeholder="Descripción y logros"
                            onChange={(e) => handleChange(e, "experienceWork")}
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
                    {infoCamper.educacion &&
                      infoCamper.educacion.map((item, index) => (
                        <Education
                          data={item}
                          color={colorTheme}
                          key={index}
                        />
                      ))}
                    <Box
                      component="form"
                      sx={{ margin: "30px 0 0 0" }}
                      onSubmit={(e) => handleSubmit(e, "education")}
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
                            // value={formData.tipo}
                            name="tipo"
                            placeholder="Tipo"
                            onChange={(e) => handleChange(e, "education")}
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
                            // value={formData.fecha}
                            name="fecha"
                            type="date"
                            onChange={(e) => handleChange(e, "education")}
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
                            // value={formData.titulo}
                            name="titulo"
                            placeholder="Título"
                            onChange={(e) => handleChange(e, "education")}
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
                            // value={formData.institucion}
                            name="institucion"
                            placeholder="Institución"
                            onChange={(e) => handleChange(e, "education")}
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
      ) : (
        <h2>Cargando ...</h2>
      )}
    </>
  );
}
