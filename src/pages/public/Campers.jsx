import {
  Box,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import Camper from "../../components/Camper.jsx";
import figura from "../../assets/Img/figura.png";
import { useState, useEffect } from "react";
import fondoCampers from "../../assets/Img/fondoCampers.svg";
import "../../assets/css/Camper.css";

export default function Campers() {
  const [data, setData] = useState(null);
  const [tecnologia, setTecnologia] = useState(1);
  const [ruta, setRuta] = useState(5);
  const [ingles, setIngles] = useState(9);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("../../../server/campers.json");
        const dataRes = await response.json();
        setData(dataRes.campers);
      } catch (e) {
        console.log("Error => ", e);
      }
    };
    fetchData();
  }, []);

  const handleChangeTecnologia = (event) => {
    setTecnologia(event.target.value);
  };
  const handleChangeRuta = (event) => {
    setIngles(event.target.value);
  };
  const handleChangeIngles = (event) => {
    setRuta(event.target.value);
  };
  return (
    <>
      <Box
      sx={{position:"relative", padding:"60px 0 120px 0"}}
      // sx={{
      //   backgroundImage: `url(${fondoCampers})`,
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      //   backgroundRepeat:"no-repeat",
      //   backgroundAttachment:"local",
      //   position:"relative",
      //   padding:"30px 0"
      // }}
      >
        <Container>
          <Typography
            sx={{
              fontSize: "60px",
              fontWeight: "600",
              paddingBottom: "10px",
              color: "#333333",
            }}
          >
            Campers
          </Typography>
          <Box>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              sx={{
                marginRight: "20px",
                fontSize: "14px",
                width: { xs: "100%", md: "300px" },
                padding: "0",
                color: "#fff",
              }}
              value={tecnologia}
              label="Age"
              onChange={handleChangeTecnologia}
            >
              <MenuItem value={1}>Tecnologias</MenuItem>
              <MenuItem value={2}>Php</MenuItem>
              <MenuItem value={3}>React</MenuItem>
              <MenuItem value={4}>Java</MenuItem>
            </Select>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              sx={{
                fontSize: "14px",
                width: { xs: "100%", md: "300px" },
                margin: { xs: "15px 0", sm: "0" },
                marginRight: { sm: "20px" },
                padding: "0",
                color: "#fff",
              }}
              value={ruta}
              label="Age"
              onChange={handleChangeRuta}
            >
              <MenuItem value={5}>Ruta</MenuItem>
              <MenuItem value={6}>Developer BackEnd</MenuItem>
              <MenuItem value={7}>Developer FullStack</MenuItem>
              <MenuItem value={8}>Develope FrontEnd</MenuItem>
            </Select>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              sx={{
                fontSize: "14px",
                width: { xs: "100%", md: "300px" },
                padding: "0",
                color: "#fff",
              }}
              value={ingles}
              label="Age"
              onChange={handleChangeIngles}
            >
              <MenuItem value={9}>Nivel ingles</MenuItem>
              <MenuItem value={10}>A1</MenuItem>
              <MenuItem value={11}>A2</MenuItem>
              <MenuItem value={12}>B1</MenuItem>
            </Select>
          </Box>
          <Box sx={{ display: "flex", flexWrap: "wrap" }}>
            {data ? (
              data.map((item) => (
                <Camper
                  data={item}
                  key={item.nombre}
                  color={item.genero=="Masculino"?"#2A4B9B":"#6C3483"}
                />
              ))
            ) : (
              <p>Cargando datos...</p>
            )}
          </Box>
        </Container>
        <img
          src={figura}
          style={{
            position: "absolute",
            top: "30%",
            bottom:"0px",
            right:"90px",
            zIndex: "1",
            width:"100px"
            
          }}
        />
        <img
          src={figura}
          style={{
            position: "absolute",
            top: "50%",
            bottom:"90px",
            left:"90px",
            zIndex: "1",
            width:"100px"
            
          }}
        />
        <img
          src={figura}
          style={{
            position: "absolute",
            top: "90%",
            bottom:"0px",
            right:"250px",
            zIndex: "1",
            width:"100px"
            
          }}
        />
      </Box>
    </>
  );
}
