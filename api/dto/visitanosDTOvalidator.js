import { check, body } from "express-validator";

export const validateVisitanosPost = [
    body()
    .custom((value, { req }) => {
        const permitidas = ['nombre', 'edad', 'interes','tel', 'cc', 'fecha_visita', 'empresa','vehiculo']; // Lista de propiedades permitidas
  
        // Verificar si hay propiedades no permitidas en el cuerpo
        const propiedadesNoPermitidas = Object.keys(req.body).filter(prop => !permitidas.includes(prop));
  
        if (propiedadesNoPermitidas.length > 0) {
          throw new Error(`Propiedades no permitidas: ${propiedadesNoPermitidas.join(', ')}`);
        }
  
        return true; // Indica que la validación fue exitosa
      })
      .withMessage('El Body contiene propiedades no permitidas'),

    check("nombre")
        .notEmpty().withMessage("la propiedad 'nombre' es obligatorio")
        .isLength({min:1, max:60}).withMessage("la propiedad 'nombre' debe tener maximo 60 caracteres")
        .isString().withMessage("la propiedad 'nombre' debe ser un string"),

    check("edad")
        .notEmpty().withMessage("la propiedad 'edad' es obligatoria")
        .isInt({min: 0, max: 100 }).withMessage("la propiedad 'edad' debe ser tipo Int y no sobrepasar los 3 digitos"),
    
    check("interes")
        .notEmpty().withMessage("la propiedad 'interes' es obligatoria")
        .isLength({min:1, max:20}).withMessage("la propiedad 'interes' no debe tener mas de 20 caracteres")
        .isIn(['conocer', 'reportar', 'contratar']).withMessage("la propiedad 'interes' tiene data no valida")
        .isString().withMessage("la 'interes' debe ser un string"),

    check("tel")
        .notEmpty().withMessage("la propiedad 'tel' es obligatoria")
        .isLength({min:1, max:10}).withMessage("la propiedad 'tel' debe tener maximo 10 caracteres")
        .isNumeric().withMessage("la propiedad 'tel' debe ser numerico"),
    
    check("cc")
        .notEmpty().withMessage("la propiedad 'cc' es obligatoria")
        .isString().withMessage("la propiedad 'cc' debe ser string")
        .isLength({min:8, max:10}).withMessage("la propiedad 'cc' debe tener minimo 8 y maximo 10 caracteres"),
    
    check("fecha_visita")
        .notEmpty().withMessage("la propiedad 'fecha_visita' es obligatoria")
        .isDate().withMessage("la propiedad 'fecha_visita' debe ser tipo Date"),

    check("empresa")
        .notEmpty().withMessage("la propiedad 'empresa' es obligatoria")
        .isString().withMessage("la propiedad 'empresa' debe ser string")
        .isLength({min:1, max:60}).withMessage("la propiedad 'empresa' debe tener maximo 60 caracteres"),

    check("vehiculo")
        .optional()
        .isString().withMessage("la propiedad 'vehiculo' debe ser string")
        .isLength({min:1, max:20}).withMessage("la propiedad 'empresa' debe tener maximo 60 caracteres")
        .isIn(['Automovil', 'Motocicleta']).withMessage("la propiedad 'vehiculo' tiene data no valida")
]

export const validateVisitanosPut = [
    body()
    .custom((value, { req }) => {
        const permitidas = ['nombre', 'edad', 'interes','tel', 'cc', 'fecha_visita', 'empresa','vehiculo']; // Lista de propiedades permitidas
  
        // Verificar si hay propiedades no permitidas en el cuerpo
        const propiedadesNoPermitidas = Object.keys(req.body).filter(prop => !permitidas.includes(prop));
  
        if (propiedadesNoPermitidas.length > 0) {
          throw new Error(`Propiedades no permitidas: ${propiedadesNoPermitidas.join(', ')}`);
        }
  
        return true; // Indica que la validación fue exitosa
      })
      .withMessage('El Body contiene propiedades no permitidas'),

    check("nombre")
        .optional()
        .isLength({min:1, max:60}).withMessage("la propiedad 'nombre' debe tener maximo 60 caracteres")
        .isString().withMessage("la propiedad 'nombre' debe ser un string"),

    check("edad")
        .optional()
        .isInt({min: 0, max: 100 }).withMessage("la propiedad 'edad' debe ser tipo Int y no sobrepasar los 3 digitos"),
    
    check("interes")
        .optional()
        .isLength({min:1, max:20}).withMessage("la propiedad 'interes' no debe tener mas de 20 caracteres")
        .isIn(['conocer', 'reportar', 'contratar']).withMessage("la propiedad 'interes' tiene data no valida")
        .isString().withMessage("la 'interes' debe ser un string"),

    check("tel")
        .optional()
        .isLength({min:1, max:10}).withMessage("la propiedad 'tel' debe tener maximo 10 caracteres")
        .isNumeric().withMessage("la propiedad 'tel' debe ser numerico"),
    
    check("cc")
        .optional()
        .isString().withMessage("la propiedad 'cc' debe ser string")
        .isLength({min:8, max:10}).withMessage("la propiedad 'cc' debe tener minimo 8 y maximo 10 caracteres"),
    
    check("fecha_visita")
        .optional()
        .isDate().withMessage("la propiedad 'fecha_visita' debe ser tipo Date"),

    check("empresa")
        .optional()
        .isString().withMessage("la propiedad 'empresa' debe ser string")
        .isLength({min:1, max:60}).withMessage("la propiedad 'empresa' debe tener maximo 60 caracteres"),

    check("vehiculo")
        .isString().withMessage("la propiedad 'vehiculo' debe ser string")
        .isLength({min:1, max:20}).withMessage("la propiedad 'empresa' debe tener maximo 60 caracteres")
        .isIn(['Automovil', 'Motocicleta']).withMessage("la propiedad 'vehiculo' tiene data no valida")
]

export const validateVisitanosQuery = [
    body()
    .custom((value, { req }) => {
        const permitidas = ['id']; // Lista de propiedades permitidas
  
        // Verificar si hay propiedades no permitidas en el cuerpo
        const propiedadesNoPermitidas = Object.keys(req.body).filter(prop => !permitidas.includes(prop));
  
        if (propiedadesNoPermitidas.length > 0) {
          throw new Error(`Propiedades no permitidas: ${propiedadesNoPermitidas.join(', ')}`);
        }
  
        return true; // Indica que la validación fue exitosa
      })
      .withMessage('El query contiene propiedades no permitidas'),

    check("id")
        .notEmpty().withMessage("la propiedad 'id' es obligatorio")
        .isInt().withMessage("la propiedad 'id' debe ser un tipo Int")
]


