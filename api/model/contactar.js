import { myConexion } from "../db/conexion.js";

const database = await myConexion();

export class contactarModel{
    static async getAll(){
        return new Promise((resolve, reject)=>{
            const query = "SELECT * FROM contacto"
            database.query(
                query,
                (err,data)=>{
                    if(err) return resolve({status:400, message:err.message})
                    resolve({status:200, message:data})
                }
            )
        })
    }
    static async postContacto(keys,values){
        return new Promise((resolve, reject)=>{
            const placeholders = keys.map(() => "?").join(", ");
            database.query(
                `INSERT INTO contacto(${keys.map(key=>key).join(", ")}) VALUES (${placeholders})`,
                [...values],
                (err,data)=>{
                    if(err) return resolve({status:400, message: err.message})
                    return resolve({status:200, message:"Agregado con Exito"})
                }
            )
        })
    }
}