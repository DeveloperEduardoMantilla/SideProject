import { Box, Typography } from "@mui/material";
import SuccessStorie from "../../components/SuccessStorie";
import figura from "../../assets/Img/figura.png";
import { width } from "@mui/system";

export default function SuccessStories() {
  return (
    <Box
      sx={{
        background: "#f8f8f8",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px 0",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontSize: "70px",
          lineHeight: "90px",
          fontWeight: "900",
          textAlign: "center",
          color: "#34495E",
          fontSize: "40px",
        }}
      >
        Casos de exito
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontSize: { xs: "14px", md: "18px" },
          textAlign: { xs: "justify", md: "center" },
          width: { xs: "80%", md: "60%" },
        }}
      >
        Empresas de todo el país ya trabajan con nosotros para crecer a gran
        escala ¡Inspírate con sus casos de éxito!
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          width: { xs: "100%", sm: "90%", lg: "100%" },
        }}
      >
        <SuccessStorie data={["#fff", "#333"]} />
        <SuccessStorie data={["#34495E", "#fff"]} />
        <SuccessStorie data={["#fff", "#333"]} />
        <SuccessStorie data={["#34495E", "#fff"]} />
      </Box>
      <img
        className="figura"
        src={figura}
        width="200px"
        style={{ position: "absolute", right: "-130px" }}
      />
    </Box>
  );
}
