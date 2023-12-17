import { Box, Typography } from "@mui/material";

export default function Education() {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        margin: "10px 0px 0px 0px",
      }}
    >
      <Typography
        sx={{
          width:"100%",
          fontWeight: "400",
          fontSize: "16px",
          padding: "10px 15px",
          color: "#333",
          fontSize: "13px",
          transition: "all ease-in-out .4s",
          "&:hover": {
            cursor: "pointer",
            color: "#fff",
            backgroundColor: "#2A4B9B",
          },
        }}
      >
        Ingeniero de Sistemas || Unidades Tecnologicas de Santander S.A.S ||
        17/12/2023 || Pregrado
      </Typography>
    </Box>
  );
}
