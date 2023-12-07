/* eslint-disable react/prop-types */
import { Paper } from "@mui/material";

export default function ItemsCarousel({ item }) {
  return (
    <Paper>
      <img src={item.imgUrl} style={{width:"100%", objectFit:"cover", maxWidth:"100%", objectPosition:"center"}} />
    </Paper>
  );
}
