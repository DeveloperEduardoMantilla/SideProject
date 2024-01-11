import { Box, Typography, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useEffect } from "react";

export default function CardTextCv({
  data,
  arrayData,
  onDataReload,
  enableDelete = false,
  endpoint,
}) {
  const handleDelete = async () => {

    try {
     
      let newData = {skills:arrayData.skills.filter(item=> item !== data)};

      const server = JSON.parse(import.meta.env.VITE_MY_SERVER);
      const token = JSON.parse(localStorage.getItem("token"));

      let option = {
        method: "PUT",
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization: token,
        }),
        body: JSON.stringify(newData),
      };
      let ruta = `http://${server.host}:${server.port}/cv?id=${arrayData.id}`;

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
        <Typography sx={{ padding: "10px", fontSize: "14px" }}>{data}</Typography>
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
