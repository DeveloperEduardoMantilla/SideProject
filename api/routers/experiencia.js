import { Router } from "express"
import { validateExperienciaQuerys, validateExperienciaPost, validateExperienciaUpdate } from "../dto/experienciaDTOvalidator.js";
import { validatePermisos } from "../middleware/validatePermisos.js";
import { experienciaController } from "../controller/experiencia.js";
import { verifyToken } from "../middleware/jwt.js";


const appExperiencia = Router(); 

appExperiencia.get("/",validatePermisos(["*"]), validateExperienciaQuerys, experienciaController.getAll)
appExperiencia.get("/cv", validatePermisos(["*"]), validateExperienciaQuerys, experienciaController.getCvId)
appExperiencia.post("/", verifyToken(), validatePermisos(["admin", "usuario"]), validateExperienciaPost, experienciaController.postExperiencia)
appExperiencia.put("/", verifyToken(), validatePermisos(["admin", "usuario"]), validateExperienciaQuerys, validateExperienciaUpdate, experienciaController.putExperiencia)
appExperiencia.delete("/", verifyToken(), validatePermisos(["admin", "usuario"]), validateExperienciaQuerys, experienciaController.deleteExperiencia)

export default appExperiencia;