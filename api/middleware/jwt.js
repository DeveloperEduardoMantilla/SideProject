import { SignJWT, jwtVerify } from "jose";
import { myConexion } from "../db/conexion.js";
import "dotenv/config";

const database = await myConexion();

const generateToken =  async(req,res,next) =>{
    let keys = Object.keys(req.body);
    if(keys.length == 0) return res.status(400).send({status:400, message:"Data no enviada"})
    database.query(
    "SELECT * FROM usuario u WHERE u.usuario = ?",
    [req.body.usuario],
    (err,data)=>{
        if (err) return res.status(400).send({status:400, message: err.message})
        if (data.length == 0) return res.status(400).send({status:400, message: "Usuario no encontrado"})
        database.query(
        "SELECT * FROM usuario u WHERE u.password = ?",
        [req.body.password],
        async (err2,data2)=>{
            if (err2) return res.status(400).send({status:400, message: err2.message})
            if (data2.length == 0) return res.status(400).send({status:400, message: "Password Incorrecta"})

            const encoder = new TextEncoder();
            const jwtConstructor = await new SignJWT({idUsuario: data[0].id, rol: data[0].rol})
            .setProtectedHeader({alg:'HS256', typ:'JWT'})
            .setIssuedAt()
            .setExpirationTime('3h')
            .sign(encoder.encode(process.env.JWT_PRIVATE_KEY))
    
            req.data = {status: 200, token: jwtConstructor};
            next()
        }
        )
    })
}

const verifyToken = () => async (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization)
      return res.status(400).json({ status: 400, message: "Porfavor Generar Token" });
      try {
        const encoder = new TextEncoder();
        req.data = await jwtVerify(
          authorization,
          encoder.encode(process.env.JWT_PRIVATE_KEY)
        );
        next();
      } catch (error) {
        res.status(498).send({status:498, message: "Error Token, Generar Uno Nuevo"});
      }
   
  };

export {
    generateToken,
    verifyToken
}