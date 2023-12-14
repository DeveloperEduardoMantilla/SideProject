import { check, body } from "express-validator";

export const validateContactoPost = [
    body()
    .custom((value, { req }) => {
        const permitidas = ['nombre', 'telefono', 'empresa','correo', 'descripcion']; // Lista de propiedades permitidas
  
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

    check("telefono")
        .notEmpty().withMessage("la propiedad 'telefono' es obligatoria")
        .isLength({max:10}).withMessage("la 'telefono' debe tener maximo 10 cracteres")
        .isString().withMessage("la propiedad 'telefono' debe ser un string"),
    
    check("empresa")
        .notEmpty().withMessage("la propiedad 'empresa' es obligatoria")
        .isLength({max:60}).withMessage("la 'empresa' debe tener minimo 60 cracteres")
        .isString().withMessage("la 'empresa' debe ser un string"),

    check("correo")
        .notEmpty().withMessage("la propiedad 'correo' es obligatoria")
        .isEmail().withMessage("la propiedad 'correo' es Incorrecto"),
    
    check("descripcion")
        .optional()
        .isString().withMessage("la propiedad 'descripcion' debe ser string")
        .isLength({max:300}).withMessage("la propiedad 'descripcion' debe tener maximo 300 cracteres")
]

