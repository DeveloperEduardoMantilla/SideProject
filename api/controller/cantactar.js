import { contactarModel } from "../model/contactar.js";
import { validationResult } from "express-validator";


export class contactarController{
    static async getAll(req,res){
        const response = await contactarModel.getAll();
        res.status(response.status).send(response)
    }
    static async postContacto(req,res){
        //validar si hay errores
        const errors = validationResult(req)
        if(!errors.isEmpty()) return res.status(400).send({status:400, message:errors.errors[0].msg})
        //validar si el usuario que queremos agregar ya existe

        const keys = Object.keys(req.body);
        const values = Object.values(req.body)
        const result = await contactarModel.postContacto(keys, values);
        res.status(result.status).send(result)
    }
}
