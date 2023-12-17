import { check, body } from "express-validator";

export const validateEnfoquePost = [
    body()
    .custom((value, { req }) => {
        const permitidas = ['nombre']; // Lista de propiedades permitidas
  
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
        .isString().withMessage("la propiedad 'nombre' debe ser un string")
    
]

export const validateEnfoqueUpdate = [
    body()
    .custom((value, { req }) => {
        const permitidas = ['nombre']; // Lista de propiedades permitidas
  
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
        .isString().withMessage("la propiedad 'nombre' debe ser un string")
]

export const validateEnfoqueQuerys = [
    check("id")
        .optional()
        .isInt().withMessage("el param/query 'id' debe ser tipo INT")
]