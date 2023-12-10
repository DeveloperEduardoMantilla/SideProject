import { Box, Typography } from "@mui/material";
import Camper from "../../components/Camper.jsx";

export default function Campers() {
  return (
    <>
      <Box
        sx={{ backgroundColor: "#CCD1D1", padding: "60px",}}
      >
        <Typography
          sx={{
            fontSize: "60px",
            fontWeight: "600",
            paddingBottom: "10px",
            background: "-webkit-linear-gradient(#000087, #2CAAFF)",WebkitBackgroundClip: "text", color: "transparent"
          }}
        >
          Campers
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap",  }}>
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
