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
import Camper from "./Camper.jsx";
import figura from "../../../assets/Img/figura.png";
import { useState, useEffect } from "react";
import astronautaTriste from "../../../assets/Img/astronautaTriste.png";
import useFilterCampers from "../../../hooks/useFilterCampers.js";
import "../../../assets/css/Camper.css";

export default function Campers() {
  const {
    data,
    setData,
    enfoques,
    ingles,
    setIngles,
    tecnologia,
    setTecnologia,
    ruta,
    setRuta,
    filterIng,
    filterRut,
    filterTecn,
    fetchEnfoques,
    fetchData,
  } = useFilterCampers();

  const handleChangeTecnologia = (event) => {
    setTecnologia(event.target.value);
  };
  const handleChangeRuta = (event) => {
    setRuta(event.target.value);
  };
  const handleChangeIngles = (event) => {
    setIngles(event.target.value);
  };

  useEffect(() => {
    filterTecn();
  }, [tecnologia]);

  useEffect(() => {
    filterIng();
  }, [ingles]);

  useEffect(() => {
    filterRut();
  }, [ruta]);

  useEffect(() => {
    fetchData();
    fetchEnfoques();
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
              <MenuItem value="t">Tecnologias</MenuItem>
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
              <MenuItem value={0}>Ruta</MenuItem>
              {enfoques &&
                enfoques.map((item) => (
                  <MenuItem
                    key={item.id}
                    value={item.id}
                  >
                    {item.nombre}
                  </MenuItem>
                ))}
            </Select>

            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={ingles}
              sx={{ width: { xs: "100%", sm: "30%" } }}
              label="Age"
              onChange={handleChangeIngles}
            >
              <MenuItem value="i">Nivel ingles</MenuItem>
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
