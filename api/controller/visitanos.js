import { visitanosModel } from "../model/visitanos.js";
import { validationResult } from "express-validator";


export class visitanosController{
    static async getAll(req,res){
        if(req.query.id){
            const errors = validationResult(req)
            if(!errors.isEmpty()) return res.status(400).send({status:400, message:errors.errors[0].msg})
    
            const response = await visitanosModel.getId(req.query.id);
            return res.status(response.status).send(response)
        }
        const responseb = await visitanosModel.getAll();
        res.status(responseb.status).send(responseb)
    }

    static async postVisitanos(req,res){
        //validar si hay errores
        const errors = validationResult(req)
        if(!errors.isEmpty()) return res.status(400).send({status:400, message:errors.errors[0].msg})
        //validar si el usuario que queremos agregar ya existe
        req.body.fecha_visita = new Date(req.body.fecha_visita)
        req.body.estado = "en espera"

        const keys = Object.keys(req.body);
        const values = Object.values(req.body)
        const result = await visitanosModel.postContacto(keys, values);
        res.status(result.status).send(result)
    }

    static async putVisitanos(req,res){
        const errors = validationResult(req)
        if(!errors.isEmpty()) return res.status(400).send({status:400, message:errors.errors[0].msg})
        //Validar si exite el usuario que queremos modificar
        const {id} =  req.query;
        const dataValidate = await visitanosModel.getId(id)
        if(dataValidate.message.length == 0) return res.status(400).send({status:400, message:"Error, solicitud a modificar Inexistente"})

        const result = await visitanosModel.putEstado(req.body, id);
        res.status(result.status).send(result)
    }

    static async deleteUsuario(req,res){
        const errors = validationResult(req)
        if(!errors.isEmpty()) return res.status(400).send({status:400, message:errors.errors[0].msg})

        const {id} =  req.query;
        const dataValidate = await visitanosModel.getId(id)
        if(dataValidate.message.length == 0) return res.status(400).send({status:400, message:"Error, solicitud a Eliminar Inexistente"})
        
        const result = await visitanosModel.deleteUsuario(id);
        res.status(result.status).send(result)
    }
}
