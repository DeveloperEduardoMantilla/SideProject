import React, { useState } from "react";

const usePrivatizacion = () => {
    const [stateRoutes, setStateRoutes] = useState({
        Login:true,
        Camper:false,
        Admin:false
      })

    return{
        stateRoutes,
        setStateRoutes,
    }
}

export default usePrivatizacion;