import { check, body } from "express-validator";

export const validateCvPost = [
    body()
    .custom((value, { req }) => {
        const permitidas = ['foto', 'nombre','idEnfoque', 'palabrasClave','acercaDeMi', 'skills', 'idioma', 'nivelIdioma','github', 'linkedin']; // Lista de propiedades permitidas
  
        // Verificar si hay propiedades no permitidas en el cuerpo
        const propiedadesNoPermitidas = Object.keys(req.body).filter(prop => !permitidas.includes(prop));
  
        if (propiedadesNoPermitidas.length > 0) {
          throw new Error(`Propiedades no permitidas: ${propiedadesNoPermitidas.join(', ')}`);
        }
  
        return true; // Indica que la validación fue exitosa
      })
    .withMessage('El Body contiene propiedades no permitidas'),
    check("foto")
        .notEmpty().withMessage("la propiedad 'foto' es obligatorio")
        .isLength({min:1, max:300}).withMessage("la propiedad 'foto' debe tener maximo 300 caracteres")
        .isString().withMessage("la propiedad 'foto' debe ser un string"),
    
    check("nombre")
        .notEmpty().withMessage("la propiedad 'nombre' es obligatoria")
        .isLength({min:3, max:60}).withMessage("la 'nombre' debe tener maximo 60 cracteres")
        .isString().withMessage("la propiedad 'nombre' debe ser un string"),

    check("idEnfoque")
        .notEmpty().withMessage("la propiedad 'idEnfoque' es obligatoria")
        .isInt().withMessage("la propiedad 'idEnfoque' debe ser tipo INT"),
    
    check("palabrasClave")
        .notEmpty().withMessage("la propiedad 'palabrasClave' es obligatoria")
        .isArray().withMessage("la propiedad 'palabrasClave' debe ser un array"),

    check("acercaDeMi")
        .notEmpty().withMessage("la propiedad 'acercaDeMi' es obligatoria")
        .isString().withMessage("la propiedad 'acercaDeMi' debe ser un string")
        .isLength({ min: 1, max: 400}).withMessage("la propiedad 'acercaDeMi' debe tener maximo 400 caracteres"),

    
    check("skills")
        .notEmpty().withMessage("la propiedad 'skills' es obligatoria")
        .isArray().withMessage("la propiedad 'skills' debe ser un array"),
    
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
        const permitidas = ['foto', 'nombre','idEnfoque', 'palabrasClave','acercaDeMi', 'skills', 'idioma', 'nivelIdioma','github', 'linkedin']; // Lista de propiedades permitidas
  
        // Verificar si hay propiedades no permitidas en el cuerpo
        const propiedadesNoPermitidas = Object.keys(req.body).filter(prop => !permitidas.includes(prop));
  
        if (propiedadesNoPermitidas.length > 0) {
          throw new Error(`Propiedades no permitidas: ${propiedadesNoPermitidas.join(', ')}`);
        }
  
        return true; // Indica que la validación fue exitosa
      })
    .withMessage('El Body contiene propiedades no permitidas'),

    check("foto")
        .optional()
        .isLength({min:1, max:300}).withMessage("la propiedad 'foto' debe tener maximo 300 caracteres")
        .isString().withMessage("la propiedad 'foto' debe ser un string"),
    
    check("nombre")
        .optional()
        .isLength({min:3, max:60}).withMessage("la 'nombre' debe tener maximo 60 cracteres")
        .isString().withMessage("la propiedad 'nombre' debe ser un string"),
    
    check("idEnfoque")
      .optional()
      .isInt().withMessage("la propiedad 'idEnfoque' debe ser tipo INT"),
    
    check("palabrasClave")
        .optional()
        .isArray().withMessage("la propiedad 'palabrasClave' debe ser un array"),

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
        .isString().withMessage("la propiedad 'linkedin' debe ser un string")
]

export const validateCvQuerys = [
    check("id")
        .optional()
        .isInt().withMessage("el param/query 'id' debe ser tipo INT")
]