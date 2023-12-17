import { Box } from "@mui/material";
import Statistic from "./Statistic";
export default function Statistics() {
  const dataStatistic = [
    {
      title: "Campers",
      value: "400",
    },
    {
      title: "Usuarios",
      value: "410",
    },
    {
      title: "Cv - Publicadas",
      value: "50",
    },
    {
      title: "Cv - Revisar",
      value: "10",
    },
    {
      title: "Solicitud Acceso",
      value: "17",
    }
  ];
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        margin: "30px 0 0 0",
      }}
    >
        {
            dataStatistic.map((item, index)=>(
                <Statistic data={item} key={index} />
            ))
        }
    </Box>
  );
}
