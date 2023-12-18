import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import MUIDataTable from "mui-datatables";
import { useEffect, useState } from "react";
import "../../../assets/css/Tables.css";

export default function TableUser() {
  const [dataUser, setDataUser] = useState([]);
  const [responsive, setResponsive] = useState("standard");
  const columns = [
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
      name: "estado",
      options: {
        filter: false,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                console.log(tableMeta.rowData);
              }}
            >
              Ver
            </Button>
          );
        },
      },
    },
  ];

  useEffect(() => {
    const dataUser = async () => {
      const sever = JSON.parse(import.meta.env.VITE_MY_SERVER);
      const userData = await (
        await fetch(`http://${sever.host}:${sever.port}/usuario`)
      ).json();

      const formattedData = userData.message.map((user) => [
        user.usuario,
        user.rol,
        user.estado,
        user.correo,
        user.ciudad,
      ]);
      setDataUser(formattedData);
    };
    dataUser();
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
          Lista Usuarios
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
