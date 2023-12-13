import { Router } from "express"
import { validateCvQuerys, validateCvPost, validateCvUpdate } from "../dto/cvDTOvalidator.js";
import { cvController } from "../controller/cv.js";
const appCv = Router(); 

appCv.get("/", cvController.getAll)
appCv.get("/:id", validateCvQuerys, cvController.getId)
appCv.post("/", validateCvPost, cvController.postCv)
appCv.put("/:id", validateCvQuerys, validateCvUpdate, cvController.putCv)
appCv.delete("/:id", validateCvQuerys, cvController.deleteCv)

export default appCv;