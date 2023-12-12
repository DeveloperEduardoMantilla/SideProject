import { Box, Button, Container, TextField, Typography } from "@mui/material";
import photo from "../../assets/Img/Img26.jpg";

export default function Contact() {
  return (
    <Box id="contact" sx={{ background: "#2A4B9B", width: "100%", minHeight: "400px" }}>
      <Container sx={{ display: "flex", alignItems: "center" }}>
        <Box sx={{ width: "600px" }}>
          <img
            src={photo}
            alt="Hola"
            width="100%"
          />
        </Box>
        <Box sx={{ padding: "30px 20px", width: "600px", color: "#fff" }}>
          <Typography
            variant="h5"
            sx={{ fontWeight: 600, textAlign: "center" }}
          >
            Permitenos contactarte
          </Typography>
          <form>
            <TextField
              label="Nombre"
              variant="outlined"
              fullWidth
              margin="normal"
              required
              sx={{
                width: "100%",
                "& .MuiInputLabel-root": { color: "#fff" },
                "& .MuiOutlinedInput-root": { borderColor: "red" },
              }}
            />
            <TextField
              label="Teléfono"
              variant="outlined"
              fullWidth
              margin="normal"
              required
              type="tel"
              sx={{ width: "100%", "& .MuiInputLabel-root": { color: "#fff" } }}
            />
            <TextField
              label="Empresa"
              variant="outlined"
              fullWidth
              margin="normal"
              sx={{ width: "100%", "& .MuiInputLabel-root": { color: "#fff" } }}
            />
            <TextField
              label="Correo Electrónico"
              variant="outlined"
              fullWidth
              margin="normal"
              required
              type="email"
              sx={{ width: "100%", "& .MuiInputLabel-root": { color: "#fff" } }}
            />
            <TextField
              label="Describa su necesidad"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              margin="normal"
              required
              sx={{ width: "100%", "& .MuiInputLabel-root": { color: "#fff" } }}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              sx={{ width: "100%", mt: 2 }}
            >
              Go For It
            </Button>
          </form>
        </Box>
      </Container>
    </Box>
  );
}
