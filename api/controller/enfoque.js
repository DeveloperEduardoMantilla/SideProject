import { enfoqueModel } from "../model/enfoque.js";
import { validationResult } from "express-validator";

export class enfoqueController{
    static async getAll(req,res){
        if(req.query.id){
            const errors = validationResult(req)
            if(!errors.isEmpty()) return res.status(400).send({status:400, message:errors.errors[0].msg})
    
            const result = await enfoqueModel.getId(req.query.id);
            return res.status(result.status).send(result)
        }

        const result = await enfoqueModel.getAll();
        res.status(result.status).send(result)
    }

    static async postEnfoque(req,res){
        //validar si hay errores
        const errors = validationResult(req)
        if(!errors.isEmpty()) return res.status(400).send({status:400, message:errors.errors[0].msg})
        //validar si el usuario que queremos agregar ya existe

        const keys = Object.keys(req.body);
        const values = Object.values(req.body)
        const result = await enfoqueModel.postEnfoque(keys, values);
        res.status(result.status).send(result)
    }

    static async putEnfoque(req,res){
        const errors = validationResult(req)
        if(!errors.isEmpty()) return res.status(400).send({status:400, message:errors.errors[0].msg})
        //Validar si exite el usuario que queremos modificar
        
        const {id} =  req.query;

        const result = await enfoqueModel.putEnfoque(req.body, id);
        res.status(result.status).send(result)
    }
    static async deleteEnfoque(req,res){

        const errors = validationResult(req)
        if(!errors.isEmpty()) return res.status(400).send({status:400, message:errors.errors[0].msg})    

        const {id} =  req.query;
        
        const result = await enfoqueModel.deleteEnfoque(id);
        res.status(result.status).send(result)
    }
}



