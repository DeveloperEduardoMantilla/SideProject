import { cvModel } from "../model/cv.js";
import { validationResult } from "express-validator";

export class cvController{
    static async getAll(req,res){
        if(req.query.id){
            const errors = validationResult(req)
            if(!errors.isEmpty()) return res.status(400).send({status:400, message:errors.errors[0].msg})
    
            const result = await cvModel.getId(req.query.id);
            return res.status(result.status).send(result)
        }

        const result = await cvModel.getAll();
        res.status(result.status).send(result)
    }

    static async filterEstadoCv(req,res){
        const {estado} = req.params;
        const result = await cvModel.filterEstadoCv(estado);
        res.status(result.status).send(result)
    }

    static async postCv(req,res){
        //validar si hay errores
        const errors = validationResult(req)
        if(!errors.isEmpty()) return res.status(400).send({status:400, message:errors.errors[0].msg})
        //validar si el usuario que queremos agregar ya existe
        const dataValidate = await cvModel.validateCv(req.data.payload.idUsuario)
        if(dataValidate.message.length != 0) return res.status(400).send({status:400, message:"Error, usuario ya cuenta con una CV"})
        //modificacion e ionsercion de datos por defecto
        req.body.palabrasClave = JSON.stringify(req.body.palabrasClave)
        req.body.skills = JSON.stringify(req.body.skills)
        req.body.idUsuario = req.data.payload.idUsuario
        req.body.estado = false
        req.body.accesoEditar = true
    
        const keys = Object.keys(req.body);
        const values = Object.values(req.body)
        const result = await cvModel.postCv(keys, values);
        res.status(result.status).send(result)
    }

    static async putCv(req,res){

        if(req.data.payload.rol == 'usuario' && (req.body.estado || req.body.accesoEditar))return res.status(400).send({status:400, message:"El Body contiene propiedades no permitidas"})

        const errors = validationResult(req)
        if(!errors.isEmpty()) return res.status(400).send({status:400, message:errors.errors[0].msg})
        //Validar si exite el usuario que queremos modificar

        
        const {id} =  req.params;
        const dataValidate = await cvModel.getId(id)
        if(dataValidate.message.length == 0) return res.status(400).send({status:400, message:"Error, CV a modificar Inexistente"})

        if(req.data.payload.rol == 'usuario'  && dataValidate.accesoEditar == 0) return res.status(400).send({status:400, message:"No tienes acceso a modificar"})

        if (req.body.skills){
            req.body.skills = JSON.stringify(req.body.skills)
        }
        if (req.body.palabrasClave){
            req.body.palabrasClave = JSON.stringify(req.body.palabrasClave)
        }

        const result = await cvModel.putCv(req.body, id);
        res.status(result.status).send(result)
    }
    static async deleteCv(req,res){
        const errors = validationResult(req)
        if(!errors.isEmpty()) return res.status(400).send({status:400, message:errors.errors[0].msg})

        const {id} =  req.params;
        const dataValidate = await cvModel.getId(id)
        if(dataValidate.message.length == 0) return res.status(400).send({status:400, message:"Error, CV a Eliminar Inexistente"})
        
        const result = await cvModel.deleteCv(id);
        res.status(result.status).send(result)
    }
    static async filterCv(req,res){
        const errors = validationResult(req)
        if(!errors.isEmpty()) return res.status(400).send({status:400, message:errors.errors[0].msg})

        if(Object.keys(req.query).length == 0){
            return res.status(400).send({status:400, message:"Error, Se envio mas de una query"})
        }

        if(req.query.tecn){
            const result = await cvModel.filterTecnoCv(req.query.tecn);
            return res.status(result.status).send(result)
        }
        if(req.query.ing){
            const result = await cvModel.filterIngCv(req.query.ing);
            return res.status(result.status).send(result)
        }
        if(req.query.rut){
            const result = await cvModel.filterRutaCv(req.query.rut);
            return res.status(result.status).send(result)
        }

    }
}