import express from "express";
import appUsuario from "./routers/usuario.js";
import appCv from "./routers/cv.js";
import appExperiencia from "./routers/experiencia.js";
import appEducacion from "./routers/educacion.js";
import { generateToken, verifyToken } from "./middleware/jwt.js"
import { limitRequest } from "./middleware/limit_request.js";
import { loadEnv } from "vite";

const env = loadEnv("development", process.cwd(), "VITE")
const appExpress = express();
appExpress.use(express.json());
appExpress.use(limitRequest())

appExpress.all("/login", generateToken, (req, res) => {
    res.status(req.data.status).send(req.data)
})
appExpress.use("/usuario", verifyToken(), appUsuario)
appExpress.use("/cv", verifyToken(), appCv)
appExpress.use("/experiencia", verifyToken(), appExperiencia)
appExpress.use("/educacion", verifyToken(), appEducacion)

const my_server = JSON.parse(env.VITE_MY_SERVER)
appExpress.listen(my_server, () => console.log(`servidor iniciado: http://${my_server.host}:${my_server.port}`))