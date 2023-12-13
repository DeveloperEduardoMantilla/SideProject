import { Router } from "express"
import { validateExperienciaQuerys, validateExperienciaPost, validateExperienciaUpdate } from "../dto/experienciaDTOvalidator.js";
import { experienciaController } from "../controller/experiencia.js";

const appExperiencia = Router(); 

appExperiencia.get("/", experienciaController.getAll)
appExperiencia.get("/:id", validateExperienciaQuerys, experienciaController.getId)
appExperiencia.post("/", validateExperienciaPost, experienciaController.postExperiencia)
appExperiencia.put("/:id", validateExperienciaQuerys, validateExperienciaUpdate, experienciaController.putExperiencia)
appExperiencia.delete("/:id", validateExperienciaQuerys, experienciaController.deleteExperiencia)

export default appExperiencia;