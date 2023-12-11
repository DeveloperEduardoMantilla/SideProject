import { Box, Typography } from "@mui/material";

export default function SuccessStorie() {
  return (
    <Box
      sx={{
        maxWidth: "300px",
        margin: "10px",
        boxShadow: "0px 10px 15px rgba(0,0,0,0.1)",
        padding: "40px 30px",
        position:"relative",
        transition: "all 0.5s ease",
        "&:hover": {
          cursor:"pointer",
          bottom:"10px",
          background:"rgba(0,0,0,0.1)"
        },
      }}
    >
      <Typography sx={{ fontWeight: "500", color: "#333", fontSize: "20px", padding:"10px 0" }}>
        Edgar Eduardo Mantilla
      </Typography>
      <Typography sx={{ fontWeight: "400", color: "#333", fontSize: "17px", padding:"0 0 0px 0" }}>
        LatamOriental
      </Typography>
      <Typography
        sx={{
          fontWeight: "400",
          color: "#333",
          fontSize: "14px",
          textAlign: "justify",
        }}
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis,
        earum repudiandae voluptas doloribus distinctio unde? Asperiores
        laudantium fugiat nulla illo. 
      </Typography>
    </Box>
  );
}
