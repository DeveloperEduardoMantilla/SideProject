import { Box } from "@mui/material";
import Statistic from "./Statistic";
import { useEffect, useState } from "react";
export default function Statistics() {
  const [usuarios, setUsuarios] = useState("");
  const [cvPublicadas, setCvPublicadas] = useState("");
  const [cvRevisar, setCvRevisar] = useState("");
  const [solicitudAcceso, setSolicitudAcceso] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const token = JSON.parse(localStorage.getItem("token"));

    let options = {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: token,
      }),
    };

    const server = JSON.parse(import.meta.env.VITE_MY_SERVER);

    const cvPublicadasData = await (
      await fetch(
        `http://${server.host}:${server.port}/cv/cant?estado=1`,
        options
      )
    ).json();
    setCvPublicadas("" + cvPublicadasData.message[0].cantidad);

    const usuariosData = await (
      await fetch(
        `http://${server.host}:${server.port}/usuario/cant?estado=1`,
        options
      )
    ).json();
    setUsuarios(usuariosData.message[0].cantidad);

    const cvRevisar = await (
      await fetch(
        `http://${server.host}:${server.port}/cv/cant?estado=0`,
        options
      )
    ).json();
    setCvRevisar(cvRevisar.message[0].cantidad);

    const solicitudAccesoData = await (
      await fetch(
        `http://${server.host}:${server.port}/usuario/cant?estado=0`,
        options
      )
    ).json();
    setSolicitudAcceso(solicitudAccesoData.message[0].cantidad);
  };

  useEffect(() => {
    fetchData();
    setLoading(false);
  }, []);

  let dataStatistic = [];
  if (!loading) {
    dataStatistic = [
      {
        title: "Usuarios",
        value: usuarios,
      },
      {
        title: "Cv Revisar",
        value: cvRevisar,
      },
      {
        title: "Cv Publicadas",
        value: cvPublicadas,
      },
      {
        title: "Solicitud Acceso",
        value: solicitudAcceso,
      },
    ];
  }
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        margin: "30px 0 0 0",
      }}
    >
      {dataStatistic.map((item, index) => (
        <Statistic
          data={item}
          key={index}
        />
      ))}
    </Box>
  );
}
