import { Router } from "express"
import { validateExperienciaQuerys, validateExperienciaPost, validateExperienciaUpdate } from "../dto/experienciaDTOvalidator.js";
import { validatePermisos } from "../middleware/validatePermisos.js";
import { experienciaController } from "../controller/experiencia.js";
import { verifyToken } from "../middleware/jwt.js";


const appExperiencia = Router(); 

appExperiencia.get("/",validatePermisos(["*"]), experienciaController.getAll)
appExperiencia.get("/:id", validatePermisos(["*"]), validateExperienciaQuerys, experienciaController.getId)
appExperiencia.post("/", verifyToken(), validatePermisos(["admin", "camper"]), validateExperienciaPost, experienciaController.postExperiencia)
appExperiencia.put("/:id", verifyToken(), validatePermisos(["admin", "camper"]), validateExperienciaQuerys, validateExperienciaUpdate, experienciaController.putExperiencia)
appExperiencia.delete("/:id", verifyToken(), validatePermisos(["admin", "camper"]), validateExperienciaQuerys, experienciaController.deleteExperiencia)

export default appExperiencia;