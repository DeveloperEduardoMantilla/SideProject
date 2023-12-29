import { Box, Typography } from "@mui/material";
import { useEffect } from "react";


export default function SuccessStorie({data}) {

  return (
    <Box
      sx={{
        background:data.background,
        color:data.colorText,
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",
        width:{xs:"100%", sm:"300px",},
        margin: "10px",
        boxShadow: "0px 10px 15px rgba(0,0,0,0.1)",
        padding: "20px 15px",
        position:"relative",
        transition: "all 0.5s ease",
        "&:hover": {
          cursor:"pointer",
          boxShadow: "0px 10px 15px rgba(0,0,0,0.3)"
        },
      }}
    >
      <Typography sx={{ fontWeight: "500", fontSize: "20px", padding:"10px 0" }}>
        {data.title}
      </Typography>
      <Typography sx={{ fontWeight: "400", fontSize: "17px", padding:"0 0 0px 0" }}>
        {data.enterprise}
      </Typography>
      <Typography
        sx={{
          fontWeight: "400",
          fontSize: "14px",
          textAlign: "justify",
        }}
      >
        {data.content}
      </Typography>
    </Box>
  );
}
