import { Box, Typography } from "@mui/material";
import Camper from "../../components/Camper.jsx";

export default function Campers() {
  return (
    <>
      <Box
        sx={{ backgroundColor: "#f2f2f267", padding: "60px",}}
      >
        <Typography
          sx={{
            fontSize: "60px",
            fontWeight: "600",
            paddingBottom: "10px",
            color:"#000087"
          }}
        >
          Campers
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap"}}>
          <Camper />
          <Camper />
          <Camper />
          <Camper />
          <Camper />
          <Camper />
          <Camper />
          <Camper />
        </Box>
      </Box>
    </>
  );
}
