import { useState } from "react"
import { UsuarioContext } from "./UsuarioContext"


/* eslint-disable react/prop-types */
export const UsuarioProvider = ({children}) => {
    
    const [usuario, setUsuario]= useState({})
    
    return (
        <UsuarioContext.Provider value={{ usuario,setUsuario }}>
            {children}
        </UsuarioContext.Provider>
    )
}
