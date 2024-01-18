import { Router } from "express"
import { visitanosController } from "../controller/visitanos.js";
import { validateVisitanosPost, validateVisitanosQuery, validateVisitanosPut } from "../dto/visitanosDTOvalidator.js";
import { validatePermisos } from "../middleware/validatePermisos.js";
import { verifyToken } from "../middleware/jwt.js";


const appVisitanos = Router(); 


appVisitanos.get("/", verifyToken(), validatePermisos(["admin"]), visitanosController.getAll)
appVisitanos.post("/", validatePermisos(["*"]), validateVisitanosPost, visitanosController.postVisitanos)
appVisitanos.put("/", verifyToken(), validatePermisos(["admin"]), validateVisitanosQuery, validateVisitanosPut, visitanosController.putVisitanos)
appVisitanos.delete("/", verifyToken(), validatePermisos(["admin"]), validateVisitanosQuery, visitanosController.deleteUsuario)


export default appVisitanos;