import { Router } from "express"
import { validatePermisos } from "../middleware/validatePermisos.js";
import { validateEnfoquePost, validateEnfoqueUpdate, validateEnfoqueQuerys } from "../dto/enfoqueDTOvalidate.js";
import { enfoqueController } from "../controller/enfoque.js";
import { verifyToken } from "../middleware/jwt.js";
const appEnfoque = Router(); 

appEnfoque.get("/", validatePermisos(["*"]), validateEnfoqueQuerys, enfoqueController.getAll)
appEnfoque.post("/", verifyToken(), validatePermisos(["admin"]), validateEnfoquePost, enfoqueController.postEnfoque)
appEnfoque.put("/", verifyToken(), validatePermisos(["admin"]), validateEnfoqueQuerys, validateEnfoqueUpdate, enfoqueController.putEnfoque)
appEnfoque.delete("/", verifyToken(), validatePermisos(["admin"]), validateEnfoqueQuerys, enfoqueController.deleteEnfoque)

export default appEnfoque;