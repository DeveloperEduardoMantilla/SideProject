import { Router } from "express"
import { validateExperienciaQuerys, validateExperienciaPost, validateExperienciaUpdate } from "../dto/experienciaDTOvalidator.js";
import { validatePermisos } from "../middleware/validatePermisos.js";
import { experienciaController } from "../controller/experiencia.js";

const appExperiencia = Router(); 

appExperiencia.get("/",validatePermisos(["*"]), experienciaController.getAll)
appExperiencia.get("/:id", validatePermisos(["*"]), validateExperienciaQuerys, experienciaController.getId)
appExperiencia.post("/", validatePermisos(["admin", "camper"]), validateExperienciaPost, experienciaController.postExperiencia)
appExperiencia.put("/:id", validatePermisos(["admin", "camper"]), validateExperienciaQuerys, validateExperienciaUpdate, experienciaController.putExperiencia)
appExperiencia.delete("/:id", validatePermisos(["admin", "camper"]), validateExperienciaQuerys, experienciaController.deleteExperiencia)

export default appExperiencia;