import { experienciaModel } from "../model/experiencia.js";
import { cvModel } from "../model/cv.js";
import { validationResult } from "express-validator";

export class experienciaController{
    static async getAll(req,res){
        if(req.query.id){
            const errors = validationResult(req)
            if(!errors.isEmpty()) return res.status(400).send({status:400, message:errors.errors[0].msg})
    
            const result = await experienciaModel.getId(req.query.id);
            return res.status(result.status).send(result)
        }

        const result = await experienciaModel.getAll();
        res.status(result.status).send(result)
    }

    static async getCvId(req,res){
        const errors = validationResult(req)
        if(!errors.isEmpty()) return res.status(400).send({status:400, message:errors.errors[0].msg})

        const {id} = req.query;
        const result = await experienciaModel.getCvId(id);
        res.status(result.status).send(result)
    }

    static async postExperiencia(req,res){
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
        req.body.fecha = new Date(req.body.fecha)

        const keys = Object.keys(req.body);
        const values = Object.values(req.body)
        const result = await experienciaModel.postExperiencia(keys, values);
        res.status(result.status).send(result)
    }

    static async putExperiencia(req,res){
        const errors = validationResult(req)
        if(!errors.isEmpty()) return res.status(400).send({status:400, message:errors.errors[0].msg})
        //Validar si exite el usuario que queremos modificar
        if(req.data.payload.rol == "usuario"){
            const dataValidate = await cvModel.validateCv(req.data.payload.idUsuario)

            if(req.data.payload.rol == "usuario" && dataValidate.message[0].accesoEditar == 0) return {status:400, message:"no tienes acceso a editar informacion de la CV"}
        }
        
        const {id} =  req.query;

        const result = await experienciaModel.putExperiencia(req.body, id);
        res.status(result.status).send(result)
    }
    static async deleteExperiencia(req,res){
        const errors = validationResult(req)
        if(!errors.isEmpty()) return res.status(400).send({status:400, message:errors.errors[0].msg})
        
        if(req.data.payload.rol == "usuario"){
            const dataValidate = await cvModel.validateCv(req.data.payload.idUsuario)

            if(req.data.payload.rol == "usuario" && dataValidate.message[0].accesoEditar == 0) return {status:400, message:"no tienes acceso a editar informacion de la CV"}
        }
        

        const {id} =  req.query;
        
        const result = await experienciaModel.deleteExperiencia(id);
        res.status(result.status).send(result)
    }
}



