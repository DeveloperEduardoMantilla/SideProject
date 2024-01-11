export const validatePermisos = (requiredPermission) => async (req, res, next) => {
    let rol = "";
    if (req.data) {
        rol = req.data.payload.rol;
    }
    if (!requiredPermission.includes("*")) {
        if(!requiredPermission.includes(rol)){
            return res.status(401).send({status:401, message:"No tienes autorización para acceder."})
        }
    }
    next()
  
  };
