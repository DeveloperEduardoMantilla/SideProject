import { Box, Button, Typography } from '@mui/material';
import photo from "../assets/Img/Avatar.png";
import '../assets/css/Camper.css'

export default function Camper() {
  return (
    <Box className="camper-card">
      <Box className="camper-img">
        <img src={photo} alt="" />
      </Box>
      <Box className="camper-data">
        <Typography variant='h5' className='name'>
          Edgar Mantilla
        </Typography>
        <Typography variant='' className='skills'>
          Html | Js | Php | NodeJs | Css | React 
        </Typography>
        <Button variant='outlined' className='view-camper'>Ver</Button>
      </Box>
    </Box>
  );
}