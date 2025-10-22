'use client'

//importa o hook de context.
import { createContext, useState } from "react";


//Cria um contexto
const appContexto = createContext();

//Cria um provider
/*
    O provider é quem fornece o contexto para os filhos,
    devemos chamar ele quando queremos acessar o contexto
*/
export const ContextProvider =({children}) =>{
    const [user, setUser] = useState("Mazzega")
    //retorna o contexto
    return <appContexto.Provider value={{user, setUser}}>
        {children}
    </appContexto.Provider>

}

//Exporta nosso contexto
export default appContexto;