import { Box, Typography } from "@mui/material";

export default function Statistic({data}) {
  return (
    <Box sx={{margin:"30px 10px 0 0",width:"19%",boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", display:"flex", flexDirection:"column", justifyContent:"center",}}>
        <Typography variant="h6" sx={{color:"#212F3C", fontWeight:"400", textAlign:"end", paddingRight:"10px"}}>
            {data.title}
        </Typography>
        <Typography variant="h3" sx={{fontWeight:"800", marginLeft:"10px", color:"#95A5A6"}}>
            {data.value}
        </Typography>
    </Box>
  )
}