import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "80px",
        background: "#262729",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        fontSize: "20px",
        borderTop: "1px solid #34495E"
      }}
    >
      <Typography variant="body1" sx={{ fontWeight: "300" }}>
        © 2023 CampusLands. Todos los derechos reservados.
      </Typography>
    </Box>
  );
}
