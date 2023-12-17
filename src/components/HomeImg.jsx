import { Box, Button, Typography } from "@mui/material";
import imgHome from "../assets/Img/img25.jpg";
import '../assets/css/Home.css';
export default function HomeImg() {
  return (
    <>
      <Box id="homeImg" sx={{ width: "100%", position: "relative", height: {xs:"60vh",sm:"60vh", lg:"60vh"} }}>
        <Box
          sx={{
            background: "rgba(46, 64, 83,0.3)",
            width: "100%",
            minHeight: "100%",
            position: "absolute",
            top: "0",
          }}
        />
        <img
          src={imgHome}
          style={{
            width: "100%",
            objectFit: "cover",
            maxWidth: "100%",
            height: "100%",
            objectPosition: "top",
          }}
        />
        <Box
          sx={{
            background: "rgba(46, 64, 83,0.4)",
            width: "100%",
            minHeight: "100%",
            position: "absolute",
            top: "0",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: "white",
              fontWeight: "800",
              fontSize: {xs:"40px", md:"55px"},
            }}
          >
            <span style={{color:"#ECA401"}}>Campus</span>Lands
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "white",
              background:"rgba(46, 64, 83,0.5)",
              padding:"30px",
              marginTop:"10px",
              fontSize: {xs:"17px", md:"20px"},
              fontWeight: "300",
              maxWidth:"830px",
              textAlign:"center"
            }}
          >
            Transformamos futuros a través de la educación. Garantizamos
            formación en programación y empleabilidad.
          </Typography>
          <Button
            variant="outlined"
            sx={{
              marginTop: "20px",
              color:"#fff",
              border:"1px solid #ECA401",
              background:"#ECA401",
              transition:"all ease-in-out 0.3s",
              "&:hover": {
                background: "#D59402",
              },
            }}
          >
            Contactanos
          </Button>
        </Box>
      </Box>
    </>
  );
}
