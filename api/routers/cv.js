import { Router } from "express"
import { validateCvQuerys, validateCvPost, validateCvUpdate } from "../dto/cvDTOvalidator.js";
import { validatePermisos } from "../middleware/validatePermisos.js";
import { cvController } from "../controller/cv.js";
import { verifyToken } from "../middleware/jwt.js";

const appCv = Router(); 

appCv.get("/", validatePermisos(["*"]), validateCvQuerys, cvController.getAll)
appCv.get("/estado/:estado", verifyToken(), validatePermisos(["admin"]), cvController.filterEstadoCv)
appCv.get("/cant", verifyToken(), validatePermisos(["admin"]), cvController.getCantidadEstado)
appCv.post("/", verifyToken(), validatePermisos(["admin", "usuario"]), validateCvPost, cvController.postCv)
appCv.put("/", verifyToken(), validatePermisos(["admin", "usuario"]), validateCvQuerys, validateCvUpdate, cvController.putCv)
appCv.delete("/", verifyToken(), validatePermisos(["admin", "usuario"]), validateCvQuerys, cvController.deleteCv)

export default appCv;