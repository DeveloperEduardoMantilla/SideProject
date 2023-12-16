import { Box, Typography } from "@mui/material";
import SuccessStorie from "../../components/SuccessStorie";
import figura from "../../assets/Img/figura.png";

export default function SuccessStories() {
  return (
    <Box
      sx={{
        background: "#f8f8f8",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "90px 0",
        overflow:"hidden",
        position:"relative"
      }}
    >
      <Typography
        variant="h1"
        sx={{ fontSize: "70px", lineHeight: "90px", fontWeight: "900" }}
      >
        Casos de exito
      </Typography>
      <Typography variant="body1">
        Empresas de todo el país ya trabajan con nosotros para crecer a gran
        escala ¡Inspírate con sus casos de éxito!
      </Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap"}}>
        <SuccessStorie />
        <SuccessStorie />
        <SuccessStorie />
        <SuccessStorie />
      </Box>
      <img
        className="figura"
        src={figura}
        width="200px"
        style={{ position: "absolute",  right: "-130px"}}
      />
    </Box>
  );
}
