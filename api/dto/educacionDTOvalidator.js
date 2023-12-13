import { check, body } from "express-validator";

export const validateEducacionPost = [
    body()
    .custom((value, { req }) => {
        const permitidas = ['titulo', 'institucion', 'fecha','tipo', 'idCv']; // Lista de propiedades permitidas
  
        // Verificar si hay propiedades no permitidas en el cuerpo
        const propiedadesNoPermitidas = Object.keys(req.body).filter(prop => !permitidas.includes(prop));
  
        if (propiedadesNoPermitidas.length > 0) {
          throw new Error(`Propiedades no permitidas: ${propiedadesNoPermitidas.join(', ')}`);
        }
  
        return true; // Indica que la validación fue exitosa
      })
      .withMessage('El Body contiene propiedades no permitidas'),

    check("titulo")
        .notEmpty().withMessage("la propiedad 'titulo' es obligatorio")
        .isLength({min:1, max:60}).withMessage("la propiedad 'titulo' debe tener maximo 60 caracteres")
        .isString().withMessage("la propiedad 'titulo' debe ser un string"),
    
    check("institucion")
        .notEmpty().withMessage("la propiedad 'institucion' es obligatoria")
        .isLength({max:60}).withMessage("la 'institucion' debe tener minimo 60 cracteres")
        .isString().withMessage("la 'institucion' debe ser un string"),

    check("fecha")
        .notEmpty().withMessage("la propiedad 'fecha' es obligatoria")
        .isString().withMessage("la propiedad 'fecha' debe ser tipo String"),

    check("tipo")
        .notEmpty().withMessage("la propiedad 'tipo' es obligatoria")
        .isInt().withMessage("la propiedad 'tipo' debe ser tipo INT"),
    
    check("idCv")
        .optional()
        .isInt().withMessage("la propiedad 'idCv' debe ser tipo INT")
]

export const validateEducacionUpdate = [
    body()
    .custom((value, { req }) => {
        const permitidas = ['titulo', 'institucion', 'fecha','tipo']; // Lista de propiedades permitidas
  
        // Verificar si hay propiedades no permitidas en el cuerpo
        const propiedadesNoPermitidas = Object.keys(req.body).filter(prop => !permitidas.includes(prop));
  
        if (propiedadesNoPermitidas.length > 0) {
          throw new Error(`Propiedades no permitidas: ${propiedadesNoPermitidas.join(', ')}`);
        }
  
        return true; // Indica que la validación fue exitosa
      })
      .withMessage('El Body contiene propiedades no permitidas'),

    check("titulo")
        .optional()
        .isLength({min:1, max:60}).withMessage("la propiedad 'titulo' debe tener maximo 60 caracteres")
        .isString().withMessage("la propiedad 'titulo' debe ser un string"),
    
    check("institucion")
        .optional()
        .isLength({max:60}).withMessage("la 'institucion' debe tener minimo 60 cracteres")
        .isString().withMessage("la 'institucion' debe ser un string"),

    check("fecha")
        .optional()
        .isString().withMessage("la propiedad 'fecha' debe ser tipo String"),

    check("tipo")
        .optional()
        .isInt().withMessage("la propiedad 'tipo' debe ser tipo INT")
]

export const validateEducacionQuerys = [
    check("id")
        .optional()
        .isInt().withMessage("el param/query 'id' debe ser tipo INT")
]