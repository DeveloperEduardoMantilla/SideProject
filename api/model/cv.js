import { myConexion } from "../db/conexion.js";

const database = await myConexion();

export class cvModel{
    static async getAll(){
        return new Promise((resolve,reject)=>{
            database.query(
                "SELECT cv.*, JSON_OBJECT( 'usuario', u.usuario, 'fechaRegistro', u.fechaRegistro, 'rol', u.rol, 'genero', u.genero, 'estado', u.estado, 'telefono', u.telefono, 'correo', u.correo, 'ciudad', u.ciudad) AS info_usuario FROM cv INNER JOIN usuario u ON u.id = cv.idUsuario",
                (err,data)=>{
                    if (err) return resolve({status:400, message:err.message})
                    return resolve({status:200, message:data})
                }
            )
        })
    }
    static async getId(id){
        return new Promise((resolve,reject)=>{
            database.query(
                "SELECT cv.*, JSON_OBJECT( 'usuario', u.usuario, 'fechaRegistro', u.fechaRegistro, 'rol', u.rol, 'genero', u.genero, 'estado', u.estado, 'telefono', u.telefono, 'correo', u.correo, 'ciudad', u.ciudad) AS info_usuario FROM cv INNER JOIN usuario u ON u.id = cv.idUsuario WHERE cv.id = ?",
                [id],
                (err,data)=>{
                    if(err) return resolve({status:400, message: err.message})
                    return resolve({status:200, message:data})
                }
            )
        })
    }
    static async postCv(keys,values){
        return new Promise((resolve, reject)=>{
            const placeholders = keys.map(() => "?").join(", ");
            database.query(
                `INSERT INTO cv(${keys.map(key=>key).join(", ")}) VALUES (${placeholders})`,
                [...values],
                (err,data)=>{
                    if(err) return resolve({status:400, message: err.message})
                    return resolve({status:200, message:"Agregado con Exito"})
                }
            )
        })
    }
    static async putCv(info, id){
        return new Promise((resolve, reject)=>{
            database.query(
                `UPDATE cv SET ? WHERE id = ?`,
                [info, id],
                (err,data)=>{
                    if(err) return resolve({status:400, message: err.message})
                    return resolve({status:200, message:"Modificado con Exito"})
                }
            )
        })
    }
    static async deleteCv(id){
        return new Promise((resolve,reject)=>{
            database.query(
                "DELETE FROM cv WHERE id = ?",
                [id],
                (err,data)=>{
                    if(err) return resolve({status:400, message: err.message})
                    return resolve({status:200, message:"Eliminado con Exito"})
                }
            )
        })
    }
    static async validateCv(id){
        return new Promise((resolve,reject)=>{
            database.query(
                "SELECT * FROM cv WHERE idUsuario = ?",
                [id],
                (err,data)=>{
                    if(err) return resolve({status:400, message: err.message})
                    return resolve({status:200, message:data})
                }
            )
        })
    }
}