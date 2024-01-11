import { Router } from "express"
import { validatePermisos } from "../middleware/validatePermisos.js";
import { verifyToken } from "../middleware/jwt.js";
import { emailController } from "../controller/email.js";

const appEmail = Router(); 

appEmail.post("/", verifyToken(), validatePermisos(["admin"]), emailController.postEmail)

export default appEmail;