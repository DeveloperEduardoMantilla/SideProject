import { Box, Typography, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Experience({
  data,
  color,
  onDataReload,
  enableDelete = false,
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
      const response = await fetch(
        `http://${server.host}:${server.port}/experiencia?id=${data.id}`,
        option
      );

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
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent:"space-between",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        margin: "10px 0px 0px 0px",
        padding: "10px 15px",
        transition: "all ease-in-out .4s",
        "&:hover": {
          cursor: "pointer",
        },
      }}
    >
      <Box
      >
        <Typography
          className="title"
          sx={{
            fontWeight: "600",
            fontSize: "16px",
            color: "#34495E",
            transition: "color ease-in-out .4s",
          }}
        >
          {data.cargo} || {data.empresa} || {data.fecha}
        </Typography>
        <Typography sx={{ width: "100%", fontSize: "13px" }}>
          {data.descripcionLogros}
        </Typography>
      </Box>
      {enableDelete && (
        <IconButton
          sx={{ color: "#B03A2E" }}
          aria-label="delete"
          onClick={handleDelete}
        >
          <DeleteIcon />
        </IconButton>
      )}
    </Box>
  );
}
