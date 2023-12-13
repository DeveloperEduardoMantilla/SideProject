import { myConexion } from "../db/conexion.js";

const database = await myConexion();

export class experienciaModel{
    static async getAll(){
        return new Promise((resolve,reject)=>{
            database.query(
                "SELECT cv.id AS idCv, JSON_ARRAYAGG(JSON_OBJECT( 'id', exp.id, 'cargo', exp.cargo, 'empresa', exp.empresa, 'descripcionLogros', exp.descripcionLogros, 'fecha', exp.fecha, 'cargo', exp.cargo)) AS experiencias FROM experiencia exp INNER JOIN cv ON exp.idCv = cv.id GROUP BY cv.id",
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
                "SELECT cv.id AS idCv, JSON_ARRAYAGG(JSON_OBJECT( 'id', exp.id, 'cargo', exp.cargo, 'empresa', exp.empresa, 'descripcionLogros', exp.descripcionLogros, 'fecha', exp.fecha, 'cargo', exp.cargo)) AS experiencias FROM experiencia exp INNER JOIN cv ON exp.idCv = cv.id WHERE cv.id = ? GROUP BY cv.id",
                [id],
                (err,data)=>{
                    if(err) return resolve({status:400, message: err.message})
                    return resolve({status:200, message:data})
                }
            )
        })
    }
    static async postExperiencia(keys,values){
        return new Promise((resolve, reject)=>{
            const placeholders = keys.map(() => "?").join(", ");
            database.query(
                `INSERT INTO experiencia(${keys.map(key=>key).join(", ")}) VALUES (${placeholders})`,
                [...values],
                (err,data)=>{
                    if(err) return resolve({status:400, message: err.message})
                    return resolve({status:200, message:"Agregado con Exito"})
                }
            )
        })
    }
    static async putExperiencia(info, id){
        return new Promise((resolve, reject)=>{
            database.query(
                `UPDATE experiencia SET ? WHERE id = ?`,
                [info, id],
                (err,data)=>{
                    if(err) return resolve({status:400, message: err.message})
                    return resolve({status:200, message:"Modificado con Exito"})
                }
            )
        })
    }
    static async deleteExperiencia(id){
        return new Promise((resolve,reject)=>{
            database.query(
                "DELETE FROM experiencia WHERE id = ?",
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