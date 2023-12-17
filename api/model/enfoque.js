import { myConexion } from "../db/conexion.js";

const database = await myConexion();

export class enfoqueModel{
    static async getAll(){
        return new Promise((resolve,reject)=>{
            database.query(
                "SELECT * FROM enfoque",
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
                "SELECT * FROM enfoque WHERE id = ?",
                [id],
                (err,data)=>{
                    if(err) return resolve({status:400, message: err.message})
                    return resolve({status:200, message:data})
                }
            )
        })
    }

    static async postEnfoque(keys,values){
        return new Promise((resolve, reject)=>{
            const placeholders = keys.map(() => "?").join(", ");
            database.query(
                `INSERT INTO enfoque(${keys.map(key=>key).join(", ")}) VALUES (${placeholders})`,
                [...values],
                (err,data)=>{
                    if(err) return resolve({status:400, message: err.message})
                    return resolve({status:200, message:"Agregado con Exito"})
                }
            )
        })
    }
    static async putEnfoque(info, id){
        return new Promise((resolve, reject)=>{
            database.query(
                `UPDATE enfoque SET ? WHERE id = ?`,
                [info, id],
                (err,data)=>{
                    if(err) return resolve({status:400, message: err.message})
                    return resolve({status:200, message:"Modificado con Exito"})
                }
            )
        })
    }
    static async deleteEnfoque(id){
        return new Promise((resolve,reject)=>{
            database.query(
                "DELETE FROM enfoque WHERE id = ?",
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