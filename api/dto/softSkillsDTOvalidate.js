import { check, body } from "express-validator";

export const validateSoftSkillsPost = [
    body()
    .custom((value, { req }) => {
        const permitidas = ['compentencia', 'idCv']; // Lista de propiedades permitidas
  
        // Verificar si hay propiedades no permitidas en el cuerpo
        const propiedadesNoPermitidas = Object.keys(req.body).filter(prop => !permitidas.includes(prop));
  
        if (propiedadesNoPermitidas.length > 0) {
          throw new Error(`Propiedades no permitidas: ${propiedadesNoPermitidas.join(', ')}`);
        }
  
        return true; // Indica que la validación fue exitosa
      })
      .withMessage('El Body contiene propiedades no permitidas'),

    check("compentencia")
        .notEmpty().withMessage("la propiedad 'compentencia' es obligatorio")
        .isLength({min:1, max:60}).withMessage("la propiedad 'compentencia' debe tener maximo 60 caracteres")
        .isString().withMessage("la propiedad 'compentencia' debe ser un string"),
    
    check("idCv")
        .optional()
        .isInt().withMessage("la propiedad 'idCv' debe ser tipo INT")
]

export const validateSoftSkillsUpdate = [
    body()
    .custom((value, { req }) => {
        const permitidas = ['compentencia', 'idCv']; // Lista de propiedades permitidas
  
        // Verificar si hay propiedades no permitidas en el cuerpo
        const propiedadesNoPermitidas = Object.keys(req.body).filter(prop => !permitidas.includes(prop));
  
        if (propiedadesNoPermitidas.length > 0) {
          throw new Error(`Propiedades no permitidas: ${propiedadesNoPermitidas.join(', ')}`);
        }
  
        return true; // Indica que la validación fue exitosa
      })
      .withMessage('El Body contiene propiedades no permitidas'),

    check("compentencia")
        .optional()
        .isLength({min:1, max:60}).withMessage("la propiedad 'compentencia' debe tener maximo 60 caracteres")
        .isString().withMessage("la propiedad 'compentencia' debe ser un string"),
    
    check("idCv")
        .optional()
        .isInt().withMessage("la propiedad 'idCv' debe ser tipo INT")
]

export const validateSoftSkillsQuerys = [
    check("id")
        .optional()
        .isInt().withMessage("el param/query 'id' debe ser tipo INT")
]