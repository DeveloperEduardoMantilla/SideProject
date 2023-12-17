import { Box, Typography } from "@mui/material";

export default function Education() {
  return (
    <Box sx={{display:"flex", flexWrap:"wrap", boxShadow:"0 0 10px rgba(0,0,0,0.1)", margin:"10px 0px 0px 0px", padding:"10px 15px"}}>
        <Typography sx={{fontWeight:"400", fontSize:"16px", color:"#333", fontSize:"13px"}}>
            Ingeniero de Sistemas  || Unidades Tecnologicas de Santander S.A.S || 17/12/2023 || Pregrado
        </Typography>
    </Box>
  );
}
