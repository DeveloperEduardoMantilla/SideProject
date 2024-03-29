import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Swal from "sweetalert2";
import MUIDataTable from "mui-datatables";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import useEmail from "../../../hooks/useEmail.js";
import "../../../assets/css/Tables.css";

export default function TablePermitApplication() {
  const [dataUser, setDataUser] = useState([]);
  const [responsive, setResponsive] = useState("standard");
  const {sendEmail} = useEmail()

  const columns = [
    {
      name: "id",
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
      name: "rol ",
      options: {
        filter: true,
      },
    },
    {
      name: "estado ",
      options: {
        filter: true,
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
          const rowData = tableMeta.rowData; // Obtener los datos de la fila actual
          return (
            <Button
              variant="contained"
              sx={{
                background: "#1E8449",
                padding: "0px 5px",
                fontSize: "12px",
                "&:hover": {
                  background:"#1E8449"
                },
              }}
              onClick={() => {
                validateAcceso(rowData);
              }}
            >
              Acceso
            </Button>
          );
        },
      },
    },
  ];

  const dataUsers = async () => {
    const sever = JSON.parse(import.meta.env.VITE_MY_SERVER);
    const token = JSON.parse(localStorage.getItem("token"));

    let options = {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: token,
      }),
    };
    const userData = await (
      await fetch(
        `http://${sever.host}:${sever.port}/usuario/estado/0`,
        options
      )
    ).json();

    const formattedData = userData.message.map((user) => [
      user.id,
      user.usuario,
      user.rol,
      user.estado,
      user.correo,
      user.ciudad,
    ]);
    setDataUser(formattedData);
  };

  const validateAcceso = async (dataCamper) => {
    const sever = JSON.parse(import.meta.env.VITE_MY_SERVER);
    const token = JSON.parse(localStorage.getItem("token"));

    const body = {
      estado: true,
    };

    let options = {
      method: "PUT",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: token,
      }),
      body: JSON.stringify(body),
    };
    const userData = await (
      await fetch(
        `http://${sever.host}:${sever.port}/usuario/estado?id=${dataCamper[0]}`,
        options
      )
    ).json();
    if (userData.status == 200) {
      const envioEmail = await sendEmail(dataCamper)
      if (envioEmail.status == 200) {
        Swal.fire({
          icon: "success",
          title: "Acceso Concebido",
          position: "bottom-end",
          width: "20rem",
          timer: 3000,
          toast: true,
          timerProgressBar: true,
          showConfirmButton: false,
        });
        dataUsers();
      } else{
        Swal.fire({
          icon: "error",
          title: envioEmail.message,
          position: "bottom-end",
          width: "20rem",
          timer: 3000,
          toast: true,
          timerProgressBar: true,
          showConfirmButton: false,
        });
      }
      
    }
  };

  useEffect(() => {
    dataUsers();
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
          Usuarios por permitir acceso
        </Typography>
        <MUIDataTable
          data={dataUser}
          columns={columns}
          options={options}
        />
      </Box>
    </>
  );
}
