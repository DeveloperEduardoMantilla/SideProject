import { Box, Typography } from "@mui/material";

export default function Statistic({ data }) {
  return (
    <Box
      sx={{
        margin: "30px 10px 0 0",
        padding:"1rem",
        width: {xs:"50%", sm:"40%", md:"13rem"},
        margin:{xs:"0", sm:"10px 10px 0 0 ", md:"0px 2rem 0 0"},
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          color: "#8E8E8E",
          fontWeight: "400",
          textAlign: "end",
          fontSize:"1.1rem",
          paddingRight: "10px",
        }}
      >
        {data.title}
      </Typography>
      <Typography
        variant="h3"
        sx={{ fontWeight: "800", fontSize:"3rem", marginLeft: "10px", color: "#616161" }}
      >
        {data.value}
      </Typography>
    </Box>
  );
}
