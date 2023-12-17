import { Box, Typography } from "@mui/material";

export default function Experience() {
  return (
    <Box sx={{display:"flex", flexWrap:"wrap", boxShadow:"0 0 10px rgba(0,0,0,0.1)", margin:"10px 0px 0px 0px", padding:"10px 15px"}}>
        <Typography sx={{fontWeight:"600", fontSize:"16px", color:"#34495E"}}>
            Developer BackEnd  || SolTic S.A.S || 17/12/2023
        </Typography>
        <Typography  sx={{width:"100%", fontSize:"13px"}}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. A maxime nisi atque est corporis iste itaque excepturi mollitia. Sunt exercitationem possimus excepturi dicta officia cumque mollitia expedita aperiam. Quidem, dicta.
        </Typography>
    </Box>
  );
}
