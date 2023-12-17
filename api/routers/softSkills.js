import { Router } from "express"
import { validateSoftSkillsPost, validateSoftSkillsQuerys, validateSoftSkillsUpdate } from "../dto/softSkillsDTOvalidate.js";
import { validatePermisos } from "../middleware/validatePermisos.js";
import { softSkillsController } from "../controller/softSkills.js";
import { verifyToken } from "../middleware/jwt.js";


const appSoftSkills = Router(); 

appSoftSkills.get("/",validatePermisos(["*"]), validateSoftSkillsQuerys, softSkillsController.getAll)
appSoftSkills.get("/cv", validatePermisos(["*"]), validateSoftSkillsQuerys, softSkillsController.getCvId)
appSoftSkills.post("/", verifyToken(), validatePermisos(["admin", "usuario"]), validateSoftSkillsPost, softSkillsController.postSoftSkills)
appSoftSkills.put("/", verifyToken(), validatePermisos(["admin", "usuario"]), validateSoftSkillsQuerys, validateSoftSkillsUpdate, softSkillsController.putSoftSkills)
appSoftSkills.delete("/", verifyToken(), validatePermisos(["admin", "usuario"]), validateSoftSkillsQuerys, softSkillsController.deleteSoftSkills)

export default appSoftSkills;