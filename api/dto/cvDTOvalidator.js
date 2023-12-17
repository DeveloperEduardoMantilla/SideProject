import { check, body } from "express-validator";

export const validateCvPost = [
    body()
    .custom((value, { req }) => {
        const permitidas = ['nombre','idEnfoque','acercaDeMi', 'skills', 'idUsuario', 'idioma', 'nivelIdioma','github', 'linkedin']; // Lista de propiedades permitidas
  
        // Verificar si hay propiedades no permitidas en el cuerpo
        const propiedadesNoPermitidas = Object.keys(req.body).filter(prop => !permitidas.includes(prop));
  
        if (propiedadesNoPermitidas.length > 0) {
          throw new Error(`Propiedades no permitidas: ${propiedadesNoPermitidas.join(', ')}`);
        }
  
        return true; // Indica que la validación fue exitosa
      })
    .withMessage('El Body contiene propiedades no permitidas'),

    check("nombre")
        .notEmpty().withMessage("la propiedad 'nombre' es obligatoria")
        .isLength({min:3, max:60}).withMessage("la 'nombre' debe tener maximo 60 cracteres")
        .isString().withMessage("la propiedad 'nombre' debe ser un string"),

    check("idEnfoque")
        .notEmpty().withMessage("la propiedad 'idEnfoque' es obligatoria")
        .isInt().withMessage("la propiedad 'idEnfoque' debe ser tipo INT"),

    check("acercaDeMi")
        .notEmpty().withMessage("la propiedad 'acercaDeMi' es obligatoria")
        .isString().withMessage("la propiedad 'acercaDeMi' debe ser un string")
        .isLength({ min: 1, max: 400}).withMessage("la propiedad 'acercaDeMi' debe tener maximo 400 caracteres"),

    
    check("skills")
        .notEmpty().withMessage("la propiedad 'skills' es obligatoria")
        .isArray().withMessage("la propiedad 'skills' debe ser un array"),
    
    check("idUsuario")
        .optional()
        .isInt().withMessage("la propiedad 'idUsuario' debe ser tipo INT"),
    
    check("idioma")
        .notEmpty().withMessage("la propiedad 'idioma' es obligatoria")
        .isString().withMessage("la propiedad 'idioma' debe ser un string")
        .isLength({ min: 3, max: 30 }).withMessage("la propiedad 'idioma' debe tener entre 3 y 30 caracteres"),
    
    check("nivelIdioma")
        .notEmpty().withMessage("la propiedad 'nivelIdioma' es obligatoria")
        .isString().withMessage("la propiedad 'nivelIdioma' debe ser un string")
        .isLength({ min: 1, max: 30}).withMessage("la propiedad 'nivelIdioma' debe tener maximo 30 caracteres"),

    
    check("github")
        .notEmpty().withMessage("la propiedad 'github' es obligatoria")
        .isString().withMessage("la propiedad 'github' debe ser un string"),
    
    check("linkedin")
        .notEmpty().withMessage("la propiedad 'linkedin' es obligatoria")
        .isString().withMessage("la propiedad 'linkedin' debe ser un string")
]

export const validateCvUpdate = [
    body()
    .custom((value, { req }) => {
        const permitidas = ['nombre','idEnfoque','acercaDeMi', 'skills', 'idioma', 'nivelIdioma','github', 'linkedin','estado', 'accesoEditar']; // Lista de propiedades permitidas
  
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
        .isLength({min:3, max:60}).withMessage("la 'nombre' debe tener maximo 60 cracteres")
        .isString().withMessage("la propiedad 'nombre' debe ser un string"),
    
    check("idEnfoque")
      .optional()
      .isInt().withMessage("la propiedad 'idEnfoque' debe ser tipo INT"),

    check("acercaDeMi")
        .optional()
        .isString().withMessage("la propiedad 'acercaDeMi' debe ser un string")
        .isLength({ min: 1, max: 400}).withMessage("la propiedad 'acercaDeMi' debe tener maximo 400 caracteres"),
    
    check("skills")
        .optional()
        .isArray().withMessage("la propiedad 'skills' debe ser un array"),
    
    check("idioma")
        .optional()
        .isString().withMessage("la propiedad 'idioma' debe ser un string")
        .isLength({ min: 3, max: 30 }).withMessage("la propiedad 'idioma' debe tener entre 3 y 30 caracteres"),
    
    check("nivelIdioma")
        .optional()
        .isString().withMessage("la propiedad 'nivelIdioma' debe ser un string")
        .isLength({ min: 1, max: 30}).withMessage("la propiedad 'nivelIdioma' debe tener maximo 30 caracteres"),

    
    check("github")
        .optional()
        .isString().withMessage("la propiedad 'github' debe ser un string"),
    
    check("linkedin")
        .optional()
        .isString().withMessage("la propiedad 'linkedin' debe ser un string"),

    check("estado")
        .optional()
        .isBoolean().withMessage("la propiedad 'estado' debe ser tipo Boolean"),

    check("accesoEditar")
        .optional()
        .isBoolean().withMessage("la propiedad 'accesoEditar' debe ser tipo Boolean")
]



export const validateCvQuerys = [
    check("id")
        .optional()
        .isInt().withMessage("el param/query 'id' debe ser tipo INT")
]