import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "80px",
        background: "#151d25",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        fontSize: "20px",
      }}
    >
      <Typography variant="body1" sx={{ fontWeight: "400" }}>
        <span style={{background:"#ECA401", padding:"5px 0 5px 5px", margin:"0px 5px"}}>© 2023 CampusLands. </span>Todos los derechos reservados.
      </Typography>
    </Box>
  );
}
