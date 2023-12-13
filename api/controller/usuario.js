import { usuarioModel } from "../model/usuario.js";
import { validationResult } from "express-validator";

export class usuarioController{
    static async getAll(req,res){
        const result = await usuarioModel.getAll();
        res.status(result.status).send(result)
    }

    static async getId(req,res){
        const errors = validationResult(req)
        if(!errors.isEmpty()) return res.status(400).send({status:400, message:errors.errors[0].msg})

        const {id} = req.params;
        const result = await usuarioModel.getId(id);
        res.status(result.status).send(result)
    }

    static async postUsuario(req,res){
        //validar si hay errores
        const errors = validationResult(req)
        if(!errors.isEmpty()) return res.status(400).send({status:400, message:errors.errors[0].msg})
        //validar si el usuario que queremos agregar ya existe
        const dataValidate = await usuarioModel.validateUsuario(req.body.correo)
        if(dataValidate.message.length != 0) return res.status(400).send({status:400, message:"Error, usuario ya existente"})
        req.body.estado = false
        req.body.rol = "usuario"
        const keys = Object.keys(req.body);
        const values = Object.values(req.body)
        const result = await usuarioModel.postUsuario(keys, values);
        res.status(result.status).send(result)
    }

    static async putUsuario(req,res){
        const errors = validationResult(req)
        if(!errors.isEmpty()) return res.status(400).send({status:400, message:errors.errors[0].msg})
        //Validar si exite el usuario que queremos modificar
        const {id} =  req.params;
        const dataValidate = await usuarioModel.getId(id)
        if(dataValidate.message.length == 0) return res.status(400).send({status:400, message:"Error, usuario a modificar Inexistente"})

        if(req.body.correo){
            if(dataValidate.message[0].correo != req.body.correo){
                const validateCorreo = await usuarioModel.validateUsuario(req.body.correo)
                if(validateCorreo.message.length != 0) return res.status(400).send({status:400, message:"Error, usuario ya existente"})
            }
        }

        const result = await usuarioModel.putUsuario(req.body, id);
        res.status(result.status).send(result)
    }
    static async deleteUsuario(req,res){
        const errors = validationResult(req)
        if(!errors.isEmpty()) return res.status(400).send({status:400, message:errors.errors[0].msg})

        const {id} =  req.params;
        const dataValidate = await usuarioModel.getId(id)
        if(dataValidate.message.length == 0) return res.status(400).send({status:400, message:"Error, usuario a Eliminar Inexistente"})
        
        const result = await usuarioModel.deleteUsuario(id);
        res.status(result.status).send(result)
    }
}