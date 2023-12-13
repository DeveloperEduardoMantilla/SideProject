import { Router } from "express"
import { validateEducacionQuerys, validateEducacionPost, validateEducacionUpdate } from "../dto/educacionDTOvalidator.js";
import { educacionController } from "../controller/educacion.js";
const appEducacion = Router(); 

appEducacion.get("/", educacionController.getAll)
appEducacion.get("/:id", validateEducacionQuerys, educacionController.getId)
appEducacion.post("/", validateEducacionPost, educacionController.postEducacion)
appEducacion.put("/:id", validateEducacionQuerys, validateEducacionUpdate, educacionController.putEducacion)
appEducacion.delete("/:id", validateEducacionQuerys, educacionController.deleteEducacion)

export default appEducacion;