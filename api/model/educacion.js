import { myConexion } from "../db/conexion.js";

const database = await myConexion();

export class educacionModel{
    static async getAll(){
        return new Promise((resolve,reject)=>{
            database.query(
                "SELECT cv.id AS idCv, JSON_ARRAYAGG(JSON_OBJECT( 'id', edu.id, 'titulo', edu.titulo, 'institucion', edu.institucion, 'fecha', edu.fecha, 'tipo', edu.tipo)) AS educaciones FROM educacion edu INNER JOIN cv ON edu.idCv = cv.id GROUP BY cv.id",
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
                "SELECT cv.id AS idCv, JSON_ARRAYAGG(JSON_OBJECT( 'id', edu.id, 'titulo', edu.titulo, 'institucion', edu.institucion, 'fecha', edu.fecha, 'tipo', edu.tipo)) AS educaciones FROM educacion edu INNER JOIN cv ON edu.idCv = cv.id WHERE cv.id = ? GROUP BY cv.id",
                [id],
                (err,data)=>{
                    if(err) return resolve({status:400, message: err.message})
                    return resolve({status:200, message:data})
                }
            )
        })
    }
    static async postEducacion(keys,values){
        return new Promise((resolve, reject)=>{
            const placeholders = keys.map(() => "?").join(", ");
            database.query(
                `INSERT INTO educacion(${keys.map(key=>key).join(", ")}) VALUES (${placeholders})`,
                [...values],
                (err,data)=>{
                    if(err) return resolve({status:400, message: err.message})
                    return resolve({status:200, message:"Agregado con Exito"})
                }
            )
        })
    }
    static async putEducacion(info, id){
        return new Promise((resolve, reject)=>{
            database.query(
                `UPDATE educacion SET ? WHERE id = ?`,
                [info, id],
                (err,data)=>{
                    if(err) return resolve({status:400, message: err.message})
                    return resolve({status:200, message:"Modificado con Exito"})
                }
            )
        })
    }
    static async deleteEducacion(id){
        return new Promise((resolve,reject)=>{
            database.query(
                "DELETE FROM educacion WHERE id = ?",
                [id],
                (err,data)=>{
                    if(err) return resolve({status:400, message: err.message})
                    return resolve({status:200, message:"Eliminado con Exito"})
                }
            )
        })
    }
    // static async validateExperiencia(id){
    //     return new Promise((resolve,reject)=>{
    //         database.query(
    //             "SELECT * FROM cv WHERE idUsuario = ?",
    //             [id],
    //             (err,data)=>{
    //                 if(err) return resolve({status:400, message: err.message})
    //                 return resolve({status:200, message:data})
    //             }
    //         )
    //     })
    // }
}