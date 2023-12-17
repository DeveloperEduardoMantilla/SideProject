import { Box, Container, Typography } from "@mui/material";
import Experience from "./cv/experience.jsx";
import photo from "../../../assets/Img/Avatar.png";
import Education from "./cv/Education.jsx";
import SoftSkills from "./cv/SoftSkills.jsx";
export default function Profile() {
    const softSkills = [
        {
            title:"Html"
        },
        {
            title:"Css"
        },
        {
            title:"Js"
        },
        {
            title:"React"
        },
        {
            title:"Node Js"
        },
        {
            title:"MySql"
        },
        {
            title:"MongoDB"
        },
        {
            title:"Java"
        }
    ]
  return (
    <Container>
      <Box
        sx={{
          margin: "60px 0",
          boxShadow: "-2px 5px 10px rgba(0,0,0,0.08)",
          padding: "30px",
        }}
      >
        <Box>
          <Box sx={{ display: "flex" }}>
            <img
              src={photo}
              alt=""
              style={{ with: "100px", height: "100px" }}
            />
            <Box sx={{ margin: "0px 30px" }}>
              <Typography
                variant="h4"
                sx={{ fontWeight: "600", color: "#34495E" }}
              >
                Edgar Eduardo Mantilla Garcia
              </Typography>
              <Box sx={{ display: "flex", alignItems:"center", marginTop: "10px" }}>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "400", fontSize: "15px", color:"#fff", background:"#2A4B9B", borderRadius:"10px", padding:"8px 10px" }}
                >
                  eduardoma876@gmail.com
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "400",
                    fontSize: "15px",
                    marginLeft: "20px",
                  }}
                >
                  3167967956
                </Typography>
              </Box>
            </Box>
          </Box>
          <Typography
            variant="h4"
            sx={{ fontWeight: "600", color: "#34495E", marginTop:"30px", fontSize:"20px" }}
          >
            Soft Skills
          </Typography>
          <Box sx={{display:"flex", flexWrap:"wrap"}}>
            {
                softSkills.map((item,index)=>(
                    <SoftSkills data={item} key={index}/>
                ))
            }
          </Box>
          <Typography
            variant="h4"
            sx={{ fontWeight: "600", color: "#34495E", marginTop:"30px", fontSize:"20px" }}
          >
            Educacion
          </Typography>
          <Box sx={{display:"flex", flexDirection:"column"}}>
            <Education/>
            <Education/>
            <Education/>
          </Box>
          <Typography
            variant="h4"
            sx={{ fontWeight: "600", color: "#34495E", marginTop:"30px", fontSize:"20px" }}
          >
            Experiencia Laboral
          </Typography>
          <Box sx={{display:"flex", flexDirection:"column"}}>
            <Experience/>
            <Experience/>
            <Experience/>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
