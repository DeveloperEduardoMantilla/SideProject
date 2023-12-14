import { Router } from "express"
import { contactarController } from "../controller/cantactar.js";
import { validateContactoPost } from "../dto/contactoDTOvalidator.js";
import { validatePermisos } from "../middleware/validatePermisos.js";
const appContactar = Router(); 

appContactar.get("/", validatePermisos(["admin"]), contactarController.getAll)
appContactar.post("/", validatePermisos(["*"]), validateContactoPost, contactarController.postContacto)

export default appContactar;