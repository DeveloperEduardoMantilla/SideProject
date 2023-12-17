import { myConexion } from "../db/conexion.js";

const database = await myConexion();

export class softSkillsModel{
    static async getAll(){
        return new Promise((resolve,reject)=>{
            database.query(
                "SELECT cv.id AS idCv, JSON_ARRAYAGG(JSON_OBJECT('id', sof.id, 'competencia', sof.compentencia)) AS SoftSkills FROM softSkills sof INNER JOIN cv ON sof.idCv = cv.id GROUP BY cv.id",
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
                "SELECT * FROM softSkills WHERE id = ?",
                [id],
                (err,data)=>{
                    if(err) return resolve({status:400, message: err.message})
                    return resolve({status:200, message:data})
                }
            )
        })
    }

    static async getCvId(id){
        return new Promise((resolve,reject)=>{
            database.query(
                "SELECT cv.id AS idCv, JSON_ARRAYAGG(JSON_OBJECT('id', sof.id, 'competencia', sof.compentencia)) AS SoftSkills FROM softSkills sof INNER JOIN cv ON sof.idCv = cv.id WHERE cv.id = ? GROUP BY cv.id",
                [id],
                (err,data)=>{
                    if(err) return resolve({status:400, message: err.message})
                    return resolve({status:200, message:data})
                }
            )
        })
    }
    static async postSoftSkills(keys,values){
        return new Promise((resolve, reject)=>{
            const placeholders = keys.map(() => "?").join(", ");
            database.query(
                `INSERT INTO softSkills(${keys.map(key=>key).join(", ")}) VALUES (${placeholders})`,
                [...values],
                (err,data)=>{
                    if(err) return resolve({status:400, message: err.message})
                    return resolve({status:200, message:"Agregado con Exito"})
                }
            )
        })
    }
    static async putSoftSkills(info, id){
        return new Promise((resolve, reject)=>{
            database.query(
                `UPDATE softSkills SET ? WHERE id = ?`,
                [info, id],
                (err,data)=>{
                    if(err) return resolve({status:400, message: err.message})
                    return resolve({status:200, message:"Modificado con Exito"})
                }
            )
        })
    }
    static async deleteSoftSkills(id){
        return new Promise((resolve,reject)=>{
            database.query(
                "DELETE FROM softSkills WHERE id = ?",
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