import mysql from "mysql2";
import { loadEnv } from "vite";


export async function myConexion(){
    try {
        const env = loadEnv("development", process.cwd(), "VITE")
        let conexion = undefined;
        const my_conexion = JSON.parse(env.VITE_MY_CONEXION)
        conexion = mysql.createPool(my_conexion)
        return conexion
    } catch (error) {
        return {status:500, message: "Error en la conexion"}
    }
}