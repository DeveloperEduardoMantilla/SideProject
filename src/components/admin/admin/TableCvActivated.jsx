import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Swal from "sweetalert2";
import MUIDataTable from "mui-datatables";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "../../../assets/css/Tables.css";

export default function TablePermitApplication() {
  const [dataUser, setDataUser] = useState([]);
  const [responsive, setResponsive] = useState("standard");
  const columns = [
    {
      name: "Id",
      options: {
        filter: false,
      },
    },
    {
      name: "Camper",
      options: {
        filter: false,
      },
    },
    {
      name: "Ciudad",
      options: {
        filter: true,
      },
    },
    {
      name: "Telefono",
      options: {
        filter: true,
      },
    },
    // {
    //   name: "Validar",
    //   options: {
    //     filter: false,
    //     customBodyRender: (value, tableMeta, updateValue) => {
    //       const rowData = tableMeta.rowData[0]; // Obtener los datos de la fila actual
    //       return (
    //         <Button
    //           variant="contained"
    //           sx={{
    //             background: "#1E8449",
    //             padding: "0px 5px",
    //             fontSize: "12px",
    //             "&:hover": {
    //               background:"#1E8449"
    //             },
    //           }}
    //           onClick={() => {
    //             validateAcceso(rowData);
    //           }}
    //         >
    //           Acceso
    //         </Button>
    //       );
    //     },
    //   },
    // },
    {
      name: "validar",
      options: {
        filter: false,
        customBodyRender: (value, tableMeta, updateValue) => {
          const rowData = tableMeta.rowData[0];
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
        `http://${sever.host}:${sever.port}/cv/estado/1`,
        options
      )
    ).json();
    const formattedData = userData.message.map((user) => [
      user.id,
      user.nombre,
      user.info_usuario.ciudad,
      user.info_usuario.telefono
    ]);
    setDataUser(formattedData);
   
  };

  const validateAcceso = async (id) => {
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
        `http://${sever.host}:${sever.port}/usuario/estado?id=${id}`,
        options
      )
    ).json();
    if (userData.status == 200) {
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
        noMatch: "¡Lo siento, no se encontraron registros!", 
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
          Cv publicadas
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
