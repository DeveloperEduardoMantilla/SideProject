import { myConexion } from "../db/conexion.js";

const database = await myConexion();

export class visitanosModel{
    static async getAll(){
        return new Promise((resolve, reject)=>{
            const query = "SELECT * FROM visitanos"
            database.query(
                query,
                (err,data)=>{
                    if(err) return resolve({status:400, message:err.message})
                    resolve({status:200, message:data})
                }
            )
        })
    }

    static async getId(id){
        return new Promise((resolve,reject)=>{
            database.query(
                "SELECT * FROM visitanos WHERE visitanos.id = ?",
                [id],
                (err,data)=>{
                    if(err) return resolve({status:400, message: err.message})
                    return resolve({status:200, message:data})
                }
            )
        })
    }

    static async postVisitanos(keys,values){
        return new Promise((resolve, reject)=>{
            const placeholders = keys.map(() => "?").join(", ");
            database.query(
                `INSERT INTO visitanos(${keys.map(key=>key).join(", ")}) VALUES (${placeholders})`,
                [...values],
                (err,data)=>{
                    if(err) return resolve({status:400, message: err.message})
                    return resolve({status:200, message:"Agregado con Exito"})
                }
            )
        })
    }

    static async putVisitanos(info, id){
        return new Promise((resolve, reject)=>{
            database.query(
                `UPDATE visitanos SET ? WHERE id = ?`,
                [info, id],
                (err,data)=>{
                    if(err) return resolve({status:400, message: err.message})
                    return resolve({status:200, message:"Modificado con Exito"})
                }
            )
        })
    }

    static async deleteVisitanos(id){
        return new Promise((resolve,reject)=>{
            database.query(
                "DELETE FROM visitanos WHERE id = ?",
                [id],
                (err,data)=>{
                    if(err) return resolve({status:400, message: err.message})
                    return resolve({status:200, message:"Eliminado con Exito"})
                }
            )
        })
    }
}