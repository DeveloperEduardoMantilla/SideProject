import { Router } from "express"
import { validateEducacionQuerys, validateEducacionPost, validateEducacionUpdate } from "../dto/educacionDTOvalidator.js";
import { validatePermisos } from "../middleware/validatePermisos.js";
import { educacionController } from "../controller/educacion.js";
const appEducacion = Router(); 

appEducacion.get("/", validatePermisos(["*"]), educacionController.getAll)
appEducacion.get("/:id", validatePermisos(["*"]), validateEducacionQuerys, educacionController.getId)
appEducacion.post("/", validatePermisos(["admin", "camper"]), validateEducacionPost, educacionController.postEducacion)
appEducacion.put("/:id", validatePermisos(["admin", "camper"]), validateEducacionQuerys, validateEducacionUpdate, educacionController.putEducacion)
appEducacion.delete("/:id", validatePermisos(["admin", "camper"]), validateEducacionQuerys, educacionController.deleteEducacion)

export default appEducacion;