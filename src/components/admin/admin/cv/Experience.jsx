import { Box, Typography } from "@mui/material";

export default function Experience({data, color}) {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        margin: "10px 0px 0px 0px",
        padding: "10px 15px",
        transition: "all ease-in-out .4s",
        "&:hover": {
          cursor: "pointer",
          color: "#fff",
          backgroundColor: color,
          "& .title": {
            color: "#fff",
          },
        },
      }}
    >
      <Typography className="title"
        sx={{ fontWeight: "600", fontSize: "16px", color: "#34495E", transition: "color ease-in-out .4s", }}
      >
        {data.cargo} || {data.empresa} || {data.fecha}
      </Typography>
      <Typography sx={{ width: "100%", fontSize: "13px" }}>
        {data.descripcionLogros}
      </Typography>
    </Box>
  );
}
