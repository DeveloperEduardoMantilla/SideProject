import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import MUIDataTable from "mui-datatables";
import { Link } from 'react-router-dom'; 
import { useEffect, useState } from "react";
import "../../../assets/css/Tables.css";

export default function TablePermitApplication() {
  const [dataCv, setDataCv] = useState([]);
  const [responsive, setResponsive] = useState("standard");
  let id = 0;
  
  const columns = [
    {
      name: "Id",
      options: {
        filter: false,
      },
    },
    {
      name: "usuario",
      options: {
        filter: false,
      },
    },
    {
      name: "correo ",
      options: {
        filter: false,
      },
    },
    {
      name: "ciudad ",
      options: {
        filter: true,
      },
    },
    {
      name: "validar",
      options: {
        filter: false,
        customBodyRender: (value, tableMeta, updateValue) => {
          const rowData = tableMeta.rowData[0]; // Obtener los datos de la fila actual
          return (
            <Link to={`/cv/${rowData}`} style={{ textDecoration: 'none' }}>
              <Button
                variant="contained"
                color="primary"
              >
                Ver
              </Button>
            </Link>
          );
        },
      },
    },
  ];

  useEffect(() => {
    const fetchCv = async () => {
      const sever = JSON.parse(import.meta.env.VITE_MY_SERVER);
      const token = JSON.parse(localStorage.getItem("token"))

      let options = {
        method: "GET",
        headers: new Headers({
          "Content-Type": "application/json",
          "Authorization": token
        })
      };
      const cvData = await (
        await fetch(`http://${sever.host}:${sever.port}/cv/estado/0`, options)
      ).json();

      const formattedData =[];
       cvData.message.map((cv) =>{
        formattedData.push([
          cv.idUsuario,
          cv.nombre,
          cv.info_usuario.correo,
          cv.info_usuario.ciudad,
        ])
        id= cv.id
       } );
      setDataCv(formattedData);
    };
    fetchCv();
  }, []);

  const options = {
    filter: "false",
    filterType: "textField",
    selectableRows: "none",
    responsive,
    viewColumns: true,
    download: "false",
    print: "false",
    textLabels: {
      body: {
        noMatch: "¡Lo siento, no se encontraron registros!", // Cambia el mensaje aquí
      },
    },
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          margin: "30px 0",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "600",
            color: "#34495E",
            marginBottom: "20px",
            textAlign: "start",
            width: "100%",
          }}
        >
          Validar Cv
        </Typography>
        <MUIDataTable
          data={dataCv}
          columns={columns}
          options={options}
        />
      </Box>
    </>
  );
}
