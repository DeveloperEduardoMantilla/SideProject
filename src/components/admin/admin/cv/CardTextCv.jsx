import { Box, Typography, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useEffect } from "react";

export default function CardTextCv({
  data,
  onDataReload,
  enableDelete = false,
  endpoint,
}) {
  const handleDelete = async () => {

    try {
      const server = JSON.parse(import.meta.env.VITE_MY_SERVER);
      const token = JSON.parse(localStorage.getItem("token"));

      let option = {
        method: "DELETE",
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization: token,
        }),
      };
      let ruta = "";
      if (endpoint === "softSkills") {
        ruta = `http://${server.host}:${server.port}/skills?id=${data.id}`
      }
      const response = await fetch(ruta, option);

      if (response.ok) {
        onDataReload(true);
      } else {
        alert("Error al eliminar:", response.statusText);
      }
    } catch (error) {
      alert("Error en la solicitud de eliminación:", error.message);
    }
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          background: "#f2f2f2",
          marginTop: "5px",
          marginRight: "10px",
          width: "auto",
          fontWeight: "400",
        }}
      >
        <Typography sx={{ padding: "10px", fontSize: "14px" }}>{data.competencia}</Typography>
        {enableDelete && (
          <IconButton
            sx={{ color: "#aaa" }}
            aria-label="delete"
            onClick={handleDelete}
          >
            <DeleteIcon />
          </IconButton>
        )}
      </Box>
    </>
  );
}
