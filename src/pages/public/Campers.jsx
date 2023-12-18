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
import astronautaTriste from "../../assets/Img/astronautaTriste.png";
import "../../assets/css/Camper.css";

export default function Campers() {
  const [data, setData] = useState([]);
  const [tecnologia, setTecnologia] = useState("2");
  const [ruta, setRuta] = useState(3);
  const [ingles, setIngles] = useState("0");

  const handleChangeTecnologia = (event) => {
    setTecnologia(event.target.value);
    filterTecn();
  };
  const handleChangeRuta = (event) => {
    setRuta(event.target.value);
    document.getElementById("navbar").style.zIndex = 3;
  };
  const handleChangeIngles = (event) => {
    setIngles(event.target.value);
    document.getElementById("navbar").style.zIndex = 3;
  };

  const filterTecn = async() => {
    try {
      const sever =JSON.parse(import.meta.env.VITE_MY_SERVER);
      let option = {
        method: "GET",
        headers: new Headers({
            "Content-Type": "application/json",
        })
      }
      console.log(tecnologia);
      const infoFilter =  await (await fetch(`http://${sever.host}:${sever.port}/cv/filter/?tecn=${tecnologia}`, option)).json();
      if (infoFilter.status == 200) {
          setData(infoFilter.message)
      }
  } catch (error) {
      alert(error.message)
  }
  }

  useEffect(() => {
    const fetchData = async () => {
      let options = {
        method: "GET",
        headers: new Headers({
          "Content-Type": "application/json",
        })
      };
      try {
        const sever = JSON.parse(import.meta.env.VITE_MY_SERVER);
        const campers = await (
          await fetch(`http://${sever.host}:${sever.port}/cv`, options)
        ).json();

        setData(campers.message);
      } catch (e) {
        console.log("Error => ", e);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Box
        data-aos="fade-right"
        id="campers"
        sx={{ position: "relative", padding: "0px 0 100px 0" }}
      >
        <Container sx={{ background: "#fff" }}>
          <Typography
            sx={{
              fontSize: "40px",
              fontWeight: "800",
              paddingBottom: "10px",
              color: "#34495E",
            }}
          >
            Campers
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap" }}>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={tecnologia}
              sx={{ width: { xs: "100%", sm: "30%" } }}
              label="Age"
              onChange={handleChangeTecnologia}
            >
              <MenuItem value="2" disabled>Tecnologias</MenuItem>
              <MenuItem value="php">Php</MenuItem>
              <MenuItem value="laravel">Laravel</MenuItem>
              <MenuItem value="react">React</MenuItem>
              <MenuItem value="java">Java</MenuItem>
              <MenuItem value="node">Node</MenuItem>
              <MenuItem value="express">Express</MenuItem>
              <MenuItem value="c#">C#</MenuItem>
              <MenuItem value=".net">.Net</MenuItem>
            </Select>

            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={ruta}
              sx={{
                width: { xs: "100%", sm: "30%" },
                margin: { xs: "10px 0", sm: "0px 10px" },
              }}
              label="Age"
              onChange={handleChangeRuta}
            >
              <MenuItem value={3} disabled>Ruta</MenuItem>
              <MenuItem value={1}>Developer BackEnd</MenuItem>
              <MenuItem value={2}>Developer FullStack</MenuItem>
            </Select>

            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={ingles}
              sx={{ width: { xs: "100%", sm: "30%" } }}
              label="Age"
              onChange={handleChangeIngles}
            >
              <MenuItem value="0" disabled>Nivel ingles</MenuItem>
              <MenuItem value="A1">A1</MenuItem>
              <MenuItem value="A2">A2</MenuItem>
              <MenuItem value="B1">B1</MenuItem>
              <MenuItem value="B2">B2</MenuItem>
              <MenuItem value="C1">C1</MenuItem>
            </Select>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: { xs: "center", lg: "start" },
            }}
          >
            {data.length > 0 ? (
              data.map((item, index) => (
                <Camper
                  data={item}
                  key={index}
                  color={
                    item.info_usuario.genero == "masculino"
                      ? "#2A4B9B"
                      : "#6C3483"
                  }
                />
              ))
            ) : (
              <Box
                sx={{
                  width: "100%",
                  minHeight: "200px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="body1"
                  sx={{ fontWeight: "400", fontSize: "18px" }}
                >
                  No hay datos disponibles
                </Typography>
                <img
                  width="100px"
                  src={astronautaTriste}
                  alt=""
                  className="astronaut_animation"
                />
              </Box>
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
            width: "100px",
          }}
        />
      </Box>
    </>
  );
}
