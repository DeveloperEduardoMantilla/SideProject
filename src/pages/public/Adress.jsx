import { Box, Typography } from "@mui/material";
export default function Address() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          sx={{
            display: "flex",
            justifyContent: "end",
            color: "#34495E",
            fontSize: "40px",
            fontWeight: "800",
            padding: "30px 60px 10px 0",
          }}
        >
          Encuentranos
        </Typography>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.555833383871!2d-73.12853592411352!3d7.061358616677549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e683f18ef59f9a1%3A0xffbf118f3e8f20c!2sZona%20Franca%20Santander!5e0!3m2!1ses!2sco!4v1702246884206!5m2!1ses!2sco"
          width="100%"
          height="300px"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Box>
    </>
  );
}
