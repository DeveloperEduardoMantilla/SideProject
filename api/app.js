import express from "express";
import appUsuario from "./routers/usuario.js";
import appCv from "./routers/cv.js";
import appExperiencia from "./routers/experiencia.js";
import appEducacion from "./routers/educacion.js";
import { myConexion } from "./db/conexion.js";
import { generateToken, verifyToken } from "./middleware/jwt.js"
import { limitRequest } from "./middleware/limit_request.js";
import "dotenv/config";

const database = await myConexion();

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



// appExpress.get("/token", verifyToken(), (req, res) => {
//     database.query(
//         "SELECT cv.id AS cv_id, cv.foto, cv.nombre, cv.palabrasClave, cv.acercaDeMi, cv.skills, cv.idUsuario, cv.idioma, cv.nivelIdioma, cv.estado AS cv_estado, cv.accesoEditar, cv.github, cv.linkedin, JSON_ARRAYAGG(JSON_OBJECT( 'experiencia_id', exp.id, 'cargo', exp.cargo, 'empresa', exp.empresa, 'descripcionLogros', exp.descripcionLogros, 'fecha', exp.fecha)) AS experiencias FROM cv LEFT JOIN (SELECT * FROM experiencia ORDER BY fecha DESC) exp ON cv.id = exp.idCv GROUP BY cv.id",
//         (err, data)=> {
//         res.send({ status: 200, message: data })
//     }
//     )
// })

const my_server = JSON.parse(process.env.MY_SERVER)
appExpress.listen(my_server, () => console.log(`servidor iniciado: http://${my_server.host}:${my_server.port}`))