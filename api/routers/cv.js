import { Router } from "express"
import { validateCvQuerys, validateCvPost, validateCvUpdate } from "../dto/cvDTOvalidator.js";
import { validatePermisos } from "../middleware/validatePermisos.js";
import { cvController } from "../controller/cv.js";
import { verifyToken } from "../middleware/jwt.js";

const appCv = Router(); 

appCv.get("/", validatePermisos(["*"]), validateCvQuerys, cvController.getAll)
appCv.get("/estado/:estado", verifyToken(), validatePermisos(["admin"]), cvController.filterEstadoCv)
appCv.post("/", verifyToken(), validatePermisos(["admin", "camper"]), validateCvPost, cvController.postCv)
appCv.put("/:id", verifyToken(), validatePermisos(["admin", "camper"]), validateCvQuerys, validateCvUpdate, cvController.putCv)
appCv.delete("/:id", verifyToken(), validatePermisos(["admin", "camper"]), validateCvQuerys, cvController.deleteCv)

export default appCv;