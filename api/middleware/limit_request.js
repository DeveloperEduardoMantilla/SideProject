import {rateLimit} from "express-rate-limit";

export const limitRequest = () =>{
    return rateLimit({
        windowMs: 15 * 1000,
        max:15,
        standardHeaders:true,
        legacyHeaders: false,
        message: (req,res)=>{
            res.status(400).send({status:400, message: "Se alcanzo el limite de peticiones"})
        }
    })
}