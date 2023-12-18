import { cvModel } from "../model/cv.js";
import { educacionModel } from "../model/educacion.js";
import { experienciaModel } from "../model/experiencia.js";
import { softSkillsModel } from "../model/softSkills.js";
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

    static async getCvUser(req,res){
        if(req.query.id){
            const errors = validationResult(req)
            if(!errors.isEmpty()) return res.status(400).send({status:400, message:errors.errors[0].msg})

            let objeto = {};

            const resultCv = await cvModel.getCvUser(req.query.id);
            if(resultCv.status == 200){
                objeto.cv = resultCv.message[0]
                const newId = resultCv.message[0].id
                const resultEducacion = await educacionModel.getCvId(newId);
                if(resultEducacion.status == 200){
                    objeto.educacion= (resultEducacion.message.length > 0) ?resultEducacion.message[0].educaciones : []
                    const resultExperiencia = await experienciaModel.getCvId(newId);
                    if(resultExperiencia.status == 200){
                        objeto.experiencia= (resultExperiencia.message.length > 0) ?resultExperiencia.message[0].experiencias : []
                        const resultSkills = await softSkillsModel.getCvId(newId);
                        if(resultSkills.status == 200){
                            objeto.skills= (resultSkills.message.length > 0) ?resultSkills.message[0].SoftSkills : []
                        }

                    }

                }

            return res.status(200).send({status:200, message:objeto})

            }
            
        }

        const result = await cvModel.getAll();
        res.status(result.status).send(result)
    }

    static async filterEstadoCv(req,res){
        const {estado} = req.params;
        const result = await cvModel.filterEstadoCv(estado);
        res.status(result.status).send(result)
    }

    static async getCantidadEstado(req,res){
        const {estado} = req.query;
        const result = await cvModel.getCantidadEstado(estado);
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
        if(!req.body.idUsuario){
            if (req.data.payload.rol == "usuario") {
                req.body.idUsuario = req.data.payload.idUsuario
            }
            else{
                return res.status(400).send({status:400, message:"La propiedad 'idUsuario' es obligatoria"})
            }
        } 
        req.body.skills = JSON.stringify(req.body.skills)
        req.body.estado = false
        req.body.accesoEditar = true
    
        const keys = Object.keys(req.body);
        const values = Object.values(req.body)
        const result = await cvModel.postCv(keys, values);
        res.status(result.status).send(result)
    }

    static async putCv(req,res){

        const {id} =  req.query;
        const dataValidate = await cvModel.getId(id)

        if(req.data.payload.rol == "usuario" && dataValidate.message[0].accesoEditar == 0) return {status:400, message:"no tienes acceso a editar"}

        if(req.data.payload.rol == 'usuario' && (req.body.estado || req.body.accesoEditar))return res.status(400).send({status:400, message:"El Body contiene propiedades no permitidas"})

        const errors = validationResult(req)
        if(!errors.isEmpty()) return res.status(400).send({status:400, message:errors.errors[0].msg})
        //Validar si exite el usuario que queremos modificar

        
       
        if(dataValidate.message.length == 0) return res.status(400).send({status:400, message:"Error, CV a modificar Inexistente"})

        if(req.data.payload.rol == 'usuario'  && dataValidate.accesoEditar == 0) return res.status(400).send({status:400, message:"No tienes acceso a modificar"})

        if (req.body.skills){
            req.body.skills = JSON.stringify(req.body.skills)
        }

        const result = await cvModel.putCv(req.body, id);
        res.status(result.status).send(result)
    }
    static async deleteCv(req,res){
        const errors = validationResult(req)
        if(!errors.isEmpty()) return res.status(400).send({status:400, message:errors.errors[0].msg})

        const {id} =  req.query;
        const dataValidate = await cvModel.getId(id)
        if(dataValidate.message.length == 0) return res.status(400).send({status:400, message:"Error, CV a Eliminar Inexistente"})
        
        const result = await cvModel.deleteCv(id);
        res.status(result.status).send(result)
    }

    static async filterCv(req,res){
        const errors = validationResult(req)
        if(!errors.isEmpty()) return res.status(400).send({status:400, message:errors.errors[0].msg})

        if(Object.keys(req.query).length > 1){
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