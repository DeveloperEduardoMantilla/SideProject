import { SignJWT, jwtVerify } from "jose";
import { myConexion } from "../db/conexion.js";
import "dotenv/config"
// import cryto from 'node:crypto'
import bcrypt from "bcrypt"
const database = await myConexion();

const generateToken =  async(req,res,next) =>{

  console.log(process.env.VITE_JWT_PRIVATE_KEY);
/*   
CREAR LLAVE HEXADECIMAL
console.log(cryto.randomBytes(32).toString('hex'))
 */ 
   let keys = Object.keys(req.body);
    if(keys.length == 0) return res.status(400).send({status:400, message:"Data no enviada"})
    database.query(
    "SELECT * FROM usuario u WHERE u.usuario = ?",
    [req.body.usuario],
    async (err,data)=>{
        if (err) return res.status(400).send({status:400, message: err.message})
        if (data.length == 0) return res.status(400).send({status:400, message: "Usuario no encontrado"})

        const validacionPassword = await bcrypt.compare(req.body.password, data[0].password)
        if(!validacionPassword)return res.status(400).send({status:400, message: "Password Incorrecta"})

        const encoder = new TextEncoder();
        const jwtConstructor = await new SignJWT({idUsuario: data[0].id, rol: data[0].rol})
        .setProtectedHeader({alg:'HS256', typ:'JWT'})
        .setIssuedAt()
        .setExpirationTime('5h')
        .sign(encoder.encode(process.env.VITE_JWT_PRIVATE_KEY))

        database.query(
          "INSERT INTO tokens(token) VALUES (?)",
          [jwtConstructor],
          (err2,data2)=>{
            if(err2){
              req.data = {status: 400, token: "Error al generar Token"}
            }else{
              req.data = {status: 200, token: jwtConstructor};
            }
            next()
          }
        )
    })
}

const verifyToken = () => async (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization)
      return res.status(400).json({ status: 400, message: "Por favor Generar Token" });

      try {
        database.query(
          "SELECT * FROM tokens WHERE token = ?",
          [authorization],
          async (err,data)=>{
            if(err) return res.status(498).send({status:498, message: "Error en servidor"});
            if(data.length == 0) return res.status(498).send({status:498, message: "Error Token, Generar Uno Nuevo"});
            const encoder = new TextEncoder();
            req.data = await jwtVerify(
              authorization,
              encoder.encode(process.env.VITE_JWT_PRIVATE_KEY)
            );
            next();
          }
        )
      } catch (error) {
        res.status(498).send({status:498, message: "Error Token, Generar Uno Nuevo"});
      }
   
  };

export {
    generateToken,
    verifyToken
}