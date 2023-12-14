import { Router } from "express"
import { validateUsuarioQuerys, validateUsuarioPost, validateUsuarioUpdate } from "../dto/usuarioDTOvalidator.js";
import { validatePermisos } from "../middleware/validatePermisos.js";
import { usuarioController } from "../controller/usuario.js";

const appUsuario = Router(); 

appUsuario.get("/", validatePermisos(["*"]), validateUsuarioQuerys, usuarioController.getAll)
appUsuario.get("/estado/:estado", validatePermisos(["admin"]), validateUsuarioQuerys, usuarioController.getValidateEstado)
appUsuario.post("/", validatePermisos(["admin", "camper"]), validateUsuarioPost, usuarioController.postUsuario)
appUsuario.put("/", validatePermisos(["admin", "camper"]), validateUsuarioQuerys, validateUsuarioUpdate, usuarioController.putUsuario)
appUsuario.put("/estado", validatePermisos(["admin"]), validateUsuarioQuerys, usuarioController.putEstado)
appUsuario.delete("/", validatePermisos(["admin"]), validateUsuarioQuerys, usuarioController.deleteUsuario)

export default appUsuario;