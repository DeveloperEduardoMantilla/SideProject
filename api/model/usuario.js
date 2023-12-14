import { myConexion } from "../db/conexion.js";

const database = await myConexion();
export class usuarioModel{
    static async getAll(){
        return new Promise((resolve,reject)=>{
            database.query(
                "SELECT u.id, u.usuario, u.fechaRegistro, u.rol, u.genero, u.estado, u.telefono, u.correo, u.ciudad  FROM usuario u",
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
                "SELECT u.id, u.usuario, u.fechaRegistro, u.rol, u.genero, u.estado, u.telefono, u.correo, u.ciudad  FROM usuario u WHERE u.id = ?",
                [id],
                (err,data)=>{
                    if(err) return resolve({status:400, message: err.message})
                    return resolve({status:200, message:data})
                }
            )
        })
    }
    static async postUsuario(keys,values){
        return new Promise((resolve, reject)=>{
            const placeholders = keys.map(() => "?").join(", ");
            database.query(
                `INSERT INTO usuario(${keys.map(key=>key)}) VALUES (${placeholders})`,
                [...values],
                (err,data)=>{
                    if(err) return resolve({status:400, message: err.message})
                    return resolve({status:200, message:"Agregado con Exito"})
                }
            )
        })
    }
    static async putUsuario(info, id){
        return new Promise((resolve, reject)=>{
            database.query(
                `UPDATE usuario SET ? WHERE id = ?`,
                [info, id],
                (err,data)=>{
                    if(err) return resolve({status:400, message: err.message})
                    return resolve({status:200, message:"Modificado con Exito"})
                }
            )
        })
    }
    static async putEstado(estado, id){
        return new Promise((resolve, reject)=>{
            database.query(
                `UPDATE usuario SET estado = ? WHERE id = ?`,
                [parseInt(estado), id],
                (err,data)=>{
                    if(err) return resolve({status:400, message: err.message})
                    return resolve({status:200, message:"Modificado con Exito"})
                }
            )
        })
    }
    static async deleteUsuario(id){
        return new Promise((resolve,reject)=>{
            database.query(
                "DELETE FROM usuario WHERE id = ?",
                [id],
                (err,data)=>{
                    if(err) return resolve({status:400, message: err.message})
                    return resolve({status:200, message:"Eliminado con Exito"})
                }
            )
        })
    }
    static async validateUsuario(correo){
        return new Promise((resolve,reject)=>{
            database.query(
                "SELECT u.id, u.usuario, u.fechaRegistro, u.rol, u.genero, u.estado, u.telefono, u.correo, u.ciudad FROM usuario u WHERE u.correo = ?",
                [correo],
                (err,data)=>{
                    if(err) return resolve({status:400, message: err.message})
                    return resolve({status:200, message:data})
                }
            )
        })
    }
    static async getValidateEstado(estado){
        return new Promise((resolve,reject)=>{
            database.query(
                "SELECT u.id, u.usuario, u.fechaRegistro, u.rol, u.genero, u.estado, u.telefono, u.correo, u.ciudad FROM usuario u WHERE u.estado = ?",
                [parseInt(estado)],
                (err,data)=>{
                    if(err) return resolve({status:400, message: err.message})
                    return resolve({status:200, message:data})
                }
            )
        })
    }
}