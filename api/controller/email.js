import nodemailer from "nodemailer";
import Mailgen from "mailgen";

export class emailController{
    static async postEmail(req,res){
        const {nameCamper, emailCamper} = req.body;
    
        const mailGenerator = new Mailgen({
            theme: 'default',
            product: {
                name: 'Campuslands',
                link: 'http://localhost:5173/',
                logo: 'https://media.licdn.com/dms/image/D563DAQFas8vErYi8iA/image-scale_191_1128/0/1681268371307/campuslands_cover?e=2147483647&v=beta&t=a3GpBcv_6Cy4Fmm26KFMfonyc0u8_bmif3-6iANKBFg',
                copyright: 'Copyright © 2023 Campuslands. Todos los derechos reservados.'
            }
        });
    
        const email = {
            body: {
                greeting: 'Hi Camper',
                signature: 'Atentamente',
                name: nameCamper,
                intro: 'Bienvenido a Campuslands, ya cuentas con acceso para crear tu CV',
                action: {
                    instructions: 'Para Ingresar click aqui:',
                    button: {
                        color: '#000087', // Optional action button color
                        text: 'Confirmar',
                        link: 'http://localhost:5173/'
                    }
                },
                outro: '¿Necesita ayuda o tiene preguntas? Simplemente responda a este correo electrónico, nos encantaría ayudarlo.',
               
            }
        };
        
        const emailBody = mailGenerator.generate(email);
    
        const config = {
            host: "smtp.gmail.com",
            port: 587,
            auth:{
                user: "cavillafrades@gmail.com",
                pass:"hbms yzwa wxme frxs"
            }
        }
    
        const message = {
            from: "cavillafrades@gmail.com",
            to: emailCamper,
            subject: "Solicitud de acceso CAMPUSLANDS",
            html: emailBody
        }
    
        const transport = nodemailer.createTransport(config)
        await transport.sendMail(message)

        res.status(200).send({status:200, message: "Enviado con exito"})
    }
}



