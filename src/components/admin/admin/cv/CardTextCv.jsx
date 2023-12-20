import { Typography } from "@mui/material";

export default function CardTextCv({ data }) {
  return (
    <>
      <Typography sx={{background:"#f2f2f2", marginRight:"10px", width:"auto", padding:"10px", fontSize:"14px", fontWeight:"400"}}>
        {data}
      </Typography>
    </>
  );
}
