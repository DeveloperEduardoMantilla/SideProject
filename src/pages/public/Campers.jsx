import * as React from "react";

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
  const [data, setData] = useState([]);
  const [tecnologia, setTecnologia] = useState(1);
  const [ruta, setRuta] = useState(5);
  const [ingles, setIngles] = useState(9);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const campers = await fetch("http://127.17.0.97:5017/cv");
        const dataCampers = await campers.json();

        // const response = await fetch("../../../server/campers.json");
        // const dataRes = await response.json();
        setData(dataCampers.message);
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
    setRuta(event.target.value);
    document.getElementById("navbar").style.zIndex = 3;
  };
  const handleChangeIngles = (event) => {
    setIngles(event.target.value);
    document.getElementById("navbar").style.zIndex = 3;
  };
  return (
    <>
      <Box sx={{ position: "relative", padding: "60px 0 120px 0" }}>
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
          <Box sx={{display:"flex", flexWrap:"wrap"}}>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={tecnologia}
              sx={{width:{xs:"100%", sm:"30%"}}}
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
              value={ruta}
              sx={{width:{xs:"100%", sm:"30%"},margin:{xs:"10px 0", sm:"0px 10px"}}}
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
              value={ingles}
              sx={{width:{xs:"100%", sm:"30%"}}}
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
        
            {
            data ? (
              data.map((item, index) => (
                <Camper
                  data={item}
                  key={index}
                  color={
                    JSON.parse(item.info_usuario).genero === "masculino"
                      ? "#2A4B9B"
                      : "#6C3483"
                  }
                />
              ))
            ) : (
              <p>Cargando datos...</p>
            )}
          </Box>
        </Container>
        <img
          className="figura"
          src={figura}
          style={{
            position: "absolute",
            top: "30%",
            bottom: "0px",
            right: "10px",
            zIndex: "1",
            width: "100px",
          }}
        />
        <img
          className="figura"
          src={figura}
          style={{
            position: "absolute",
            top: "50%",
            bottom: "90px",
            left: "-60px",
            zIndex: "1",
            width: "100px",
          }}
        />
        <img
          className="figura"
          src={figura}
          style={{
            position: "absolute",
            top: "90%",
            bottom: "0px",
            right: "-50px",
            width: "100px"
          }}
        />
      </Box>
    </>
  );
}
