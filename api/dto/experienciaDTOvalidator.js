import { check, body } from "express-validator";

export const validateExperienciaPost = [
    body()
    .custom((value, { req }) => {
        const permitidas = ['cargo', 'empresa', 'descripcionLogros','fecha', 'idCv']; // Lista de propiedades permitidas
  
        // Verificar si hay propiedades no permitidas en el cuerpo
        const propiedadesNoPermitidas = Object.keys(req.body).filter(prop => !permitidas.includes(prop));
  
        if (propiedadesNoPermitidas.length > 0) {
          throw new Error(`Propiedades no permitidas: ${propiedadesNoPermitidas.join(', ')}`);
        }
  
        return true; // Indica que la validación fue exitosa
      })
      .withMessage('El Body contiene propiedades no permitidas'),

    check("cargo")
        .notEmpty().withMessage("la propiedad 'cargo' es obligatorio")
        .isLength({min:1, max:60}).withMessage("la propiedad 'cargo' debe tener maximo 60 caracteres")
        .isString().withMessage("la propiedad 'cargo' debe ser un string"),
    
    check("empresa")
        .notEmpty().withMessage("la propiedad 'empresa' es obligatoria")
        .isLength({max:60}).withMessage("la 'empresa' debe tener minimo 60 cracteres")
        .isString().withMessage("la 'empresa' debe ser un string"),
    
    check("descripcionLogros")
        .notEmpty().withMessage("la propiedad 'descripcionLogros' es obligatoria")
        .isLength({max:300}).withMessage("la 'descripcionLogros' debe tener maximo 300 cracteres")
        .isString().withMessage("la propiedad 'descripcionLogros' debe ser un string"),

    check("fecha")
        .notEmpty().withMessage("la propiedad 'fecha' es obligatoria")
        .isString().withMessage("la propiedad 'fecha' debe ser tipo String"),
    
    check("idCv")
        .optional()
        .isInt().withMessage("la propiedad 'idCv' debe ser tipo INT")
]

export const validateExperienciaUpdate = [
    body()
    .custom((value, { req }) => {
        const permitidas = ['cargo', 'empresa', 'descripcionLogros','fecha']; // Lista de propiedades permitidas
  
        // Verificar si hay propiedades no permitidas en el cuerpo
        const propiedadesNoPermitidas = Object.keys(req.body).filter(prop => !permitidas.includes(prop));
  
        if (propiedadesNoPermitidas.length > 0) {
          throw new Error(`Propiedades no permitidas: ${propiedadesNoPermitidas.join(', ')}`);
        }
  
        return true; // Indica que la validación fue exitosa
      })
      .withMessage('El Body contiene propiedades no permitidas'),

    check("cargo")
        .optional()
        .isLength({min:1, max:60}).withMessage("la propiedad 'cargo' debe tener maximo 60 caracteres")
        .isString().withMessage("la propiedad 'cargo' debe ser un string"),
  
    check("empresa")
        .optional()
        .isLength({max:60}).withMessage("la 'empresa' debe tener minimo 60 cracteres")
        .isString().withMessage("la 'empresa' debe ser un string"),
    
    check("descripcionLogros")
        .optional()
        .isLength({max:300}).withMessage("la 'descripcionLogros' debe tener maximo 300 cracteres")
        .isString().withMessage("la propiedad 'descripcionLogros' debe ser un string"),

    check("fecha")
        .optional()
        .isString().withMessage("la propiedad 'fecha' debe ser tipo String"),
]

export const validateExperienciaQuerys = [
    check("id")
        .optional()
        .isInt().withMessage("el param/query 'id' debe ser tipo INT")
]