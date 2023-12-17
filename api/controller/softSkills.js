import { softSkillsModel } from "../model/softSkills.js";
import { cvModel } from "../model/cv.js";
import { validationResult } from "express-validator";

export class softSkillsController{
    static async getAll(req,res){
        if(req.query.id){
            const errors = validationResult(req)
            if(!errors.isEmpty()) return res.status(400).send({status:400, message:errors.errors[0].msg})
    
            const result = await softSkillsModel.getId(req.query.id);
            return res.status(result.status).send(result)
        }

        const result = await softSkillsModel.getAll();
        res.status(result.status).send(result)
    }

    
    static async getCvId(req,res){
        const errors = validationResult(req)
        if(!errors.isEmpty()) return res.status(400).send({status:400, message:errors.errors[0].msg})

        const {id} = req.query;
        const result = await softSkillsModel.getCvId(id);
        res.status(result.status).send(result)
    }

    static async postSoftSkills(req,res){
        //validar si hay errores
        const errors = validationResult(req)
        if(!errors.isEmpty()) return res.status(400).send({status:400, message:errors.errors[0].msg})
        //validar si el usuario que queremos agregar ya existe

        if(req.data.payload.rol == "usuario"){
            const dataValidate = await cvModel.validateCv(req.data.payload.idUsuario)

            if(req.data.payload.rol == "usuario" && dataValidate.message[0].accesoEditar == 0) return {status:400, message:"no tienes acceso a editar informacion de la CV"}
        }
        
        if(!req.body.idCv){
            if(req.data.payload.rol == "admin") return res.status(400).send({status:400, message:"la propiedad 'idCv' es obligatoria"})
            const dataValidate = await cvModel.validateCv(req.data.payload.idUsuario)
            req.body.idCv = dataValidate.message[0].id
        }

        const keys = Object.keys(req.body);
        const values = Object.values(req.body)
        const result = await softSkillsModel.postSoftSkills(keys, values);
        res.status(result.status).send(result)
    }

    static async putSoftSkills(req,res){
        const errors = validationResult(req)
        if(!errors.isEmpty()) return res.status(400).send({status:400, message:errors.errors[0].msg})
        //Validar si exite el usuario que queremos modificar
        
        if(req.data.payload.rol == "usuario"){
            const dataValidate = await cvModel.validateCv(req.data.payload.idUsuario)

            if(req.data.payload.rol == "usuario" && dataValidate.message[0].accesoEditar == 0) return {status:400, message:"no tienes acceso a editar informacion de la CVr"}
        }
        
        const {id} =  req.query;

        const result = await softSkillsModel.putSoftSkills(req.body, id);
        res.status(result.status).send(result)
    }
    static async deleteSoftSkills(req,res){

        const errors = validationResult(req)
        if(!errors.isEmpty()) return res.status(400).send({status:400, message:errors.errors[0].msg})

        if(req.data.payload.rol == "usuario"){
            const dataValidate = await cvModel.validateCv(req.data.payload.idUsuario)

            if(req.data.payload.rol == "usuario" && dataValidate.message[0].accesoEditar == 0) return {status:400, message:"no tienes acceso a editar informacion de la CV"}
        }
        

        const {id} =  req.query;
        
        const result = await softSkillsModel.deleteSoftSkills(id);
        res.status(result.status).send(result)
    }
}



