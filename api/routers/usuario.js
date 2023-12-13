import { Router } from "express"
import { validateUsuarioQuerys, validateUsuarioPost, validateUsuarioUpdate } from "../dto/usuarioDTOvalidator.js";
import { usuarioController } from "../controller/usuario.js";

const appUsuario = Router(); 

appUsuario.get("/", usuarioController.getAll)
appUsuario.get("/:id", validateUsuarioQuerys, usuarioController.getId)
appUsuario.post("/", validateUsuarioPost, usuarioController.postUsuario)
appUsuario.put("/:id", validateUsuarioQuerys, validateUsuarioUpdate, usuarioController.putUsuario)
appUsuario.delete("/:id", validateUsuarioQuerys, usuarioController.deleteUsuario)

export default appUsuario;