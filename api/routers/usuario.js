import { Router } from "express"
import { validateUsuarioQuerys, validateUsuarioPost, validateUsuarioUpdate, validateUsuarioEstado } from "../dto/usuarioDTOvalidator.js";
import { validatePermisos } from "../middleware/validatePermisos.js";
import { usuarioController } from "../controller/usuario.js";
import { verifyToken } from "../middleware/jwt.js";

const appUsuario = Router(); 

appUsuario.get("/", validatePermisos(["*"]), validateUsuarioQuerys, usuarioController.getAll)
appUsuario.get("/estado/:estado", verifyToken(), validatePermisos(["admin"]), validateUsuarioQuerys, usuarioController.getValidateEstado)
appUsuario.get("/cant", verifyToken(), validatePermisos(["admin"]), usuarioController.getCantidadEstado)
appUsuario.post("/", validatePermisos(["*"]), validateUsuarioPost, usuarioController.postUsuario)
appUsuario.post("/prueba", validatePermisos(["*"]), usuarioController.pruebaBcrypt)
appUsuario.put("/", verifyToken(), validatePermisos(["admin", "usuario"]), validateUsuarioQuerys, validateUsuarioUpdate, usuarioController.putUsuario)
appUsuario.put("/estado", verifyToken(), validatePermisos(["admin"]), validateUsuarioEstado, usuarioController.putEstado)
appUsuario.delete("/", verifyToken(), validatePermisos(["admin"]), validateUsuarioQuerys, usuarioController.deleteUsuario)
appUsuario.delete("/token/:token", verifyToken(), validatePermisos(["admin", "usuario"]), usuarioController.deleteToken)

export default appUsuario;