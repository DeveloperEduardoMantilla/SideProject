import express from "express";
import appUsuario from "./routers/usuario.js";
import appCv from "./routers/cv.js";
import appExperiencia from "./routers/experiencia.js";
import appEducacion from "./routers/educacion.js";
import appVisitanos from "./routers/visitanos.js";
import appEnfoque from "./routers/enfoque.js";
import appSoftSkills from "./routers/softSkills.js";
import appEmail from "./routers/email.js";
import { generateToken, verifyToken } from "./middleware/jwt.js"
import { limitRequest } from "./middleware/limit_request.js";
import cors from "cors"
import "dotenv/config"

const appExpress = express();
appExpress.use(express.json());
appExpress.use(cors())
appExpress.use(limitRequest())

appExpress.all("/login", generateToken, (req, res) => {
    res.status(req.data.status).send(req.data)
})
appExpress.get("/dataToken", verifyToken(), (req, res) => {
    res.status(200).send({status:200, message: req.data})
})
appExpress.use("/usuario", appUsuario)
appExpress.use("/cv", appCv)
appExpress.use("/experiencia", appExperiencia)
appExpress.use("/educacion", appEducacion)
appExpress.use("/visitanos", appVisitanos)
appExpress.use("/enfoque", appEnfoque )
appExpress.use("/skills", appSoftSkills)
appExpress.use("/email", appEmail)


const my_server = JSON.parse(process.env.VITE_MY_SERVER)
appExpress.listen(my_server, () => console.log(`servidor iniciado: http://${my_server.host}:${my_server.port}`))