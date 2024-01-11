import { check, body } from "express-validator";

export const validateUsuarioPost = [
    body()
    .custom((value, { req }) => {
        const permitidas = ['usuario', 'password', 'genero','telefono', 'correo', 'ciudad']; // Lista de propiedades permitidas
  
        // Verificar si hay propiedades no permitidas en el cuerpo
        const propiedadesNoPermitidas = Object.keys(req.body).filter(prop => !permitidas.includes(prop));
  
        if (propiedadesNoPermitidas.length > 0) {
          throw new Error(`Propiedades no permitidas: ${propiedadesNoPermitidas.join(', ')}`);
        }
  
        return true; // Indica que la validación fue exitosa
      })
      .withMessage('El Body contiene propiedades no permitidas'),
    
    check("usuario")
        .notEmpty().withMessage("la propiedad 'usuario' es obligatorio")
        .isLength({min:1, max:60}).withMessage("la propiedad 'usuario' debe tener maximo 60 caracteres")
        .isString().withMessage("la propiedad 'usuario' debe ser un string"),
    
    check("password")
        .notEmpty().withMessage("la propiedad 'password' es obligatoria")
        .isLength({min:6}).withMessage("la 'password' debe tener minimo 6 cracteres")
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.,])[A-Za-z\d@$!%*?&]+$/).withMessage("la 'password' debe contener al menos una letra minúscula, una letra mayúscula, un número y un carácter especial"),
    
    check("genero")
        .notEmpty().withMessage("la propiedad 'genero' es obligatoria")
        .isString().withMessage("la propiedad 'genero' debe ser un string")
        .isIn(['masculino', 'femenino', 'otro']).withMessage("la propiedad 'genero' debe ser masculino, femenino u otro"),

    check("telefono")
        .notEmpty().withMessage("la propiedad 'telefono' es obligatoria")
        .isString().withMessage("la propiedad 'telefono' debe ser un string")
        .isNumeric().withMessage("la propiedad 'telefono' debe contener solo números")
        .isLength({ min: 10, max: 15 }).withMessage("la propiedad 'telefono' debe tener entre 10 y 15 caracteres"),

    
    check("correo")
        .notEmpty().withMessage("la propiedad 'correo' es obligatoria")
        .isEmail()
        .custom((value) => {
            // Validar que el correo sea de Gmail
            const regex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
            if (!regex.test(value)) {
                throw new Error('correo electrónico no valido');
            }
            return true;
        }),
    
    check("ciudad")
        .notEmpty().withMessage("la propiedad 'ciudad' es obligatoria")
        .isString().withMessage("la propiedad 'ciudad' debe ser un string")
        .isLength({ min: 3, max: 50 }).withMessage("la propiedad 'ciudad' debe tener entre 3 y 50 caracteres")
]

export const validateUsuarioUpdate = [
    body()
    .custom((value, { req }) => {
        const permitidas = ['usuario', 'password', 'genero','telefono', 'correo', 'ciudad']; // Lista de propiedades permitidas
  
        // Verificar si hay propiedades no permitidas en el cuerpo
        const propiedadesNoPermitidas = Object.keys(req.body).filter(prop => !permitidas.includes(prop));
  
        if (propiedadesNoPermitidas.length > 0) {
          throw new Error(`Propiedades no permitidas: ${propiedadesNoPermitidas.join(', ')}`);
        }
  
        return true; // Indica que la validación fue exitosa
      })
      .withMessage('El Body contiene propiedades no permitidas'),
    check("usuario")
        .optional()
        .isLength({min:1, max:60}).withMessage("la propiedad 'usuario' debe tener maximo 60 caracteres")
        .isString().withMessage("la propiedad 'usuario' debe ser un string"),
    
    check("password")
        .optional()
        .isLength({min:6}).withMessage("la 'password' debe tener minimo 6 cracteres")
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.,])[A-Za-z\d@$!%*?&]+$/).withMessage("la 'password' debe contener al menos una letra minúscula, una letra mayúscula, un número y un carácter especial"),
    
    check("genero")
        .optional()
        .isString().withMessage("la propiedad 'genero' debe ser un string")
        .isIn(['masculino', 'femenino', 'otro']).withMessage("la propiedad 'genero' debe ser masculino, femenino u otro"),

    check("telefono")
        .optional()
        .isString().withMessage("la propiedad 'telefono' debe ser un string")
        .isNumeric().withMessage("la propiedad 'telefono' debe contener solo números")
        .isLength({ min: 10, max: 15 }).withMessage("la propiedad 'telefono' debe tener entre 10 y 15 caracteres"),

    
    check("correo")
        .optional()
        .isEmail().withMessage('El correo electrónico no es válido'),
    
    check("ciudad")
        .optional()
        .isString().withMessage("la propiedad 'ciudad' debe ser un string")
        .isLength({ min: 3, max: 50 }).withMessage("la propiedad 'ciudad' debe tener entre 3 y 50 caracteres")
]

export const validateUsuarioQuerys = [
    check("id")
        .optional()
        .isInt().withMessage("el param/query 'id' debe ser tipo INT")
]

export const validateUsuarioEstado = [
    body()
    .custom((value, { req }) => {
        const permitidas = ['id', 'estado', 'rol']; // Lista de propiedades permitidas
  
        // Verificar si hay propiedades no permitidas en el cuerpo
        const propiedadesNoPermitidas = Object.keys(req.body).filter(prop => !permitidas.includes(prop));
  
        if (propiedadesNoPermitidas.length > 0) {
          throw new Error(`Propiedades no permitidas: ${propiedadesNoPermitidas.join(', ')}`);
        }
  
        return true; // Indica que la validación fue exitosa
      })
      .withMessage('El Body contiene propiedades no permitidas'),

    check("id")
        .optional()
        .isInt().withMessage("el param/query 'id' debe ser tipo INT"),

    check("estado")
        .optional()
        .isBoolean().withMessage("la propiedad 'estado' debe ser tipo Boolean"),
    
    check("rol")
        .optional()
        .isString().withMessage("la propiedad 'rol' debe ser tipo string")
        .isIn(['admin', 'usuario']).withMessage("la propiedad 'rol' debe ser 'admin' o 'usuario'"),
]