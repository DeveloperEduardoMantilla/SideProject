import { Box, Typography } from "@mui/material";

export default function Experience() {
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
          backgroundColor: "#2A4B9B",
          "& .title": {
            color: "#fff",
          },
        },
      }}
    >
      <Typography className="title"
        sx={{ fontWeight: "600", fontSize: "16px", color: "#34495E", transition: "color ease-in-out .4s", }}
      >
        Developer BackEnd || SolTic S.A.S || 17/12/2023
      </Typography>
      <Typography sx={{ width: "100%", fontSize: "13px" }}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. A maxime nisi
        atque est corporis iste itaque excepturi mollitia. Sunt exercitationem
        possimus excepturi dicta officia cumque mollitia expedita aperiam.
        Quidem, dicta.
      </Typography>
    </Box>
  );
}
