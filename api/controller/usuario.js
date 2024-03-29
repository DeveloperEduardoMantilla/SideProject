import { usuarioModel } from "../model/usuario.js";
import { validationResult } from "express-validator";
import bcrypt, { hash } from "bcrypt";

export class usuarioController{
    static async getAll(req,res){
        if(req.query.id){
            const errors = validationResult(req)
            if(!errors.isEmpty()) return res.status(400).send({status:400, message:errors.errors[0].msg})
    
            const result = await usuarioModel.getId(req.query.id);
            return res.status(result.status).send(result)
        }

        const result = await usuarioModel.getAll();
        res.status(result.status).send(result)
    }

    static async getValidateEstado(req,res){
        const errors = validationResult(req)
        if(!errors.isEmpty()) return res.status(400).send({status:400, message:errors.errors[0].msg})
        const {estado} = req.params;
        const result = await usuarioModel.getValidateEstado(estado);
        res.status(result.status).send(result)
    }

    static async getCantidadEstado(req,res){

        const {estado} = req.query;
        const result = await usuarioModel.getCantidadEstado(estado);
        res.status(result.status).send(result)
    }

    static async pruebaBcrypt(req,res){
        const salt = await bcrypt.genSalt(10)
        const crypted = await bcrypt.hash("123", salt)

        res.send({message: crypted})
    }

    static async postUsuario(req,res){
        //validar si hay errores
        const errors = validationResult(req)
        if(!errors.isEmpty()) return res.status(400).send({status:400, message:errors.errors[0].msg})
        //validar si el usuario que queremos agregar ya existe
        const dataValidate = await usuarioModel.validateUsuario(req.body.usuario)
        if(dataValidate.message.length != 0) return res.status(400).send({status:400, message:"Error, usuario ya existente"})

        const salt = await bcrypt.genSalt(10)
        const crypted = await bcrypt.hash(req.body.password, salt)
        req.body.password = crypted
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
        const {id} =  req.query;
        const dataValidate = await usuarioModel.getId(id)
        if(dataValidate.message.length == 0) return res.status(400).send({status:400, message:"Error, usuario a modificar Inexistente"})

        if(req.body.usuario){
            if(dataValidate.message[0].usuario != req.body.usuario){
                const validateCorreo = await usuarioModel.validateUsuario(req.body.usuario)
                if(validateCorreo.message.length != 0) return res.status(400).send({status:400, message:"Error, usuario ya existente"})
            }
        }

        const result = await usuarioModel.putUsuario(req.body, id);
        res.status(result.status).send(result)
    }
    static async putEstado(req,res){
        const errors = validationResult(req)
        if(!errors.isEmpty()) return res.status(400).send({status:400, message:errors.errors[0].msg})
        //Validar si exite el usuario que queremos modificar
        const {id} =  req.query;
        const dataValidate = await usuarioModel.getId(id)
        if(dataValidate.message.length == 0) return res.status(400).send({status:400, message:"Error, usuario a modificar Inexistente"})

        const result = await usuarioModel.putEstado(req.body, id);
        res.status(result.status).send(result)
    }
    static async deleteUsuario(req,res){
        const errors = validationResult(req)
        if(!errors.isEmpty()) return res.status(400).send({status:400, message:errors.errors[0].msg})

        const {id} =  req.query;
        const dataValidate = await usuarioModel.getId(id)
        if(dataValidate.message.length == 0) return res.status(400).send({status:400, message:"Error, usuario a Eliminar Inexistente"})
        
        const result = await usuarioModel.deleteUsuario(id);
        res.status(result.status).send(result)
    }
    static async deleteToken(req,res){
        const {token} = req.params
        const result = await usuarioModel.deleteToken(token);
        res.status(result.status).send(result)
    }
}