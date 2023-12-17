import { Router } from "express"
import { validateEducacionQuerys, validateEducacionPost, validateEducacionUpdate } from "../dto/educacionDTOvalidator.js";
import { validatePermisos } from "../middleware/validatePermisos.js";
import { educacionController } from "../controller/educacion.js";
import { verifyToken } from "../middleware/jwt.js";
const appEducacion = Router(); 

appEducacion.get("/", validatePermisos(["*"]), validateEducacionQuerys, educacionController.getAll)
appEducacion.get("/cv", validatePermisos(["*"]), validateEducacionQuerys, educacionController.getCvId)
appEducacion.post("/", verifyToken(), validatePermisos(["admin", "usuario"]), validateEducacionPost, educacionController.postEducacion)
appEducacion.put("/", verifyToken(), validatePermisos(["admin", "usuario"]), validateEducacionQuerys, validateEducacionUpdate, educacionController.putEducacion)
appEducacion.delete("/", verifyToken(), validatePermisos(["admin", "usuario"]), validateEducacionQuerys, educacionController.deleteEducacion)

export default appEducacion;