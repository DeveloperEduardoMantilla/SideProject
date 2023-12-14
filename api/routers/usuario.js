import { Router } from "express"
import { validateUsuarioQuerys, validateUsuarioPost, validateUsuarioUpdate } from "../dto/usuarioDTOvalidator.js";
import { validatePermisos } from "../middleware/validatePermisos.js";
import { usuarioController } from "../controller/usuario.js";
import { verifyToken } from "../middleware/jwt.js";

const appUsuario = Router(); 

appUsuario.get("/", validatePermisos(["*"]), validateUsuarioQuerys, usuarioController.getAll)
appUsuario.get("/estado/:estado", verifyToken(), validatePermisos(["admin"]), validateUsuarioQuerys, usuarioController.getValidateEstado)
appUsuario.post("/", verifyToken(), validatePermisos(["admin", "camper"]), validateUsuarioPost, usuarioController.postUsuario)
appUsuario.put("/", verifyToken(), validatePermisos(["admin", "camper"]), validateUsuarioQuerys, validateUsuarioUpdate, usuarioController.putUsuario)
appUsuario.put("/estado", verifyToken(), validatePermisos(["admin"]), validateUsuarioQuerys, usuarioController.putEstado)
appUsuario.delete("/", verifyToken(), validatePermisos(["admin"]), validateUsuarioQuerys, usuarioController.deleteUsuario)

export default appUsuario;