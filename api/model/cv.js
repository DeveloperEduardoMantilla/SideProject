import { myConexion } from "../db/conexion.js";

const database = await myConexion();

export class cvModel{
    static async getAll(){
        return new Promise((resolve,reject)=>{
            database.query(
                "SELECT cv.*, JSON_OBJECT( 'id', en.id, 'nombre', en.nombre) AS enfoque, JSON_OBJECT( 'usuario', u.usuario, 'fechaRegistro', u.fechaRegistro, 'rol', u.rol, 'genero', u.genero, 'estado', u.estado, 'telefono', u.telefono, 'correo', u.correo, 'ciudad', u.ciudad) AS info_usuario FROM cv INNER JOIN usuario u ON u.id = cv.idUsuario INNER JOIN enfoque en ON cv.idEnfoque = en.id WHERE u.rol = 'usuario' AND u.estado = 1 AND cv.estado = 1",
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
                "SELECT cv.*, JSON_OBJECT( 'id', en.id, 'nombre', en.nombre) AS enfoque, JSON_OBJECT( 'usuario', u.usuario, 'fechaRegistro', u.fechaRegistro, 'rol', u.rol, 'genero', u.genero, 'estado', u.estado, 'telefono', u.telefono, 'correo', u.correo, 'ciudad', u.ciudad) AS info_usuario FROM cv INNER JOIN usuario u ON u.id = cv.idUsuario INNER JOIN enfoque en ON cv.idEnfoque = en.id WHERE u.rol = 'usuario' AND cv.id = ?",
                [id],
                (err,data)=>{
                    if(err) return resolve({status:400, message: err.message})
                    return resolve({status:200, message:data})
                }
            )
        })
    }
    static async getCantidadEstado(estado){
        return new Promise((resolve,reject)=>{
            database.query(
                "SELECT COUNT(*) AS cantidad FROM cv WHERE estado = ?",
                [parseInt(estado)],
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
    static async filterEstadoCv(estado){
        return new Promise((resolve,reject)=>{
            database.query(
                "SELECT cv.*, JSON_OBJECT( 'id', en.id, 'nombre', en.nombre) AS enfoque, JSON_OBJECT( 'usuario', u.usuario, 'fechaRegistro', u.fechaRegistro, 'rol', u.rol, 'genero', u.genero, 'estado', u.estado, 'telefono', u.telefono, 'correo', u.correo, 'ciudad', u.ciudad) AS info_usuario FROM cv INNER JOIN usuario u ON u.id = cv.idUsuario INNER JOIN enfoque en ON cv.idEnfoque = en.id WHERE u.rol = 'usuario' AND u.estado = 1 AND cv.estado = ?",
                [parseInt(estado)],
                (err,data)=>{
                    if(err) return resolve({status:400, message: err.message})
                    return resolve({status:200, message:data})
                }
            )
        })
    }

    static async filterTecnoCv(tecn){
        return new Promise((resolve,reject)=>{
            database.query(
                "SELECT cv.*, JSON_OBJECT( 'id', en.id, 'nombre', en.nombre) AS enfoque, JSON_OBJECT( 'usuario', u.usuario, 'fechaRegistro', u.fechaRegistro, 'rol', u.rol, 'genero', u.genero, 'estado', u.estado, 'telefono', u.telefono, 'correo', u.correo, 'ciudad', u.ciudad) AS info_usuario FROM cv INNER JOIN usuario u ON u.id = cv.idUsuario INNER JOIN enfoque en ON cv.idEnfoque = en.id WHERE u.rol = 'usuario' AND u.estado = 1 AND JSON_CONTAINS(cv.palabrasClave, ?)",
                [JSON.stringify(tecn)],
                (err,data)=>{
                    if(err) return resolve({status:400, message: err.message})
                    return resolve({status:200, message:data})
                }
            )
        })
    }
    static async filterRutaCv(rut){
        return new Promise((resolve,reject)=>{
            database.query(
                "SELECT cv.*, JSON_OBJECT( 'id', en.id, 'nombre', en.nombre) AS enfoque, JSON_OBJECT( 'usuario', u.usuario, 'fechaRegistro', u.fechaRegistro, 'rol', u.rol, 'genero', u.genero, 'estado', u.estado, 'telefono', u.telefono, 'correo', u.correo, 'ciudad', u.ciudad) AS info_usuario FROM cv INNER JOIN usuario u ON u.id = cv.idUsuario INNER JOIN enfoque en ON cv.idEnfoque = en.id WHERE u.rol = 'usuario' AND u.estado = 1 AND cv.idEnfoque = ?",
                [rut],
                (err,data)=>{
                    if(err) return resolve({status:400, message: err.message})
                    return resolve({status:200, message:data})
                }
            )
        })
    }
    static async filterIngCv(ing){
        return new Promise((resolve,reject)=>{
            database.query(
                "SELECT cv.*, JSON_OBJECT( 'id', en.id, 'nombre', en.nombre) AS enfoque, JSON_OBJECT( 'usuario', u.usuario, 'fechaRegistro', u.fechaRegistro, 'rol', u.rol, 'genero', u.genero, 'estado', u.estado, 'telefono', u.telefono, 'correo', u.correo, 'ciudad', u.ciudad) AS info_usuario FROM cv INNER JOIN usuario u ON u.id = cv.idUsuario INNER JOIN enfoque en ON cv.idEnfoque = en.id WHERE u.rol = 'usuario' AND u.estado = 1 AND cv.nivelIdioma = ?",
                [JSON.stringify(ing)],
                (err,data)=>{
                    if(err) return resolve({status:400, message: err.message})
                    return resolve({status:200, message:data})
                }
            )
        })
    }
}