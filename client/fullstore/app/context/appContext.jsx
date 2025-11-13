'use client'

import { apiClient } from "@/utils/apiClient";
//importa o hook de context.
import { createContext, useEffect, useState } from "react";


//Cria um contexto
const appContexto = createContext();

//Cria um provider
/*
    O provider é quem fornece o contexto para os filhos,
    devemos chamar ele quando queremos acessar o contexto
*/
export const ContextProvider =({children}) =>{
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    //Recupera o contexto do usuairo
    useEffect(() => {
        recuperarContext();
    }, [])

    async function recuperarContext(){
        const response = await apiClient.get("/auth/");
        if(response){
            setUser(response);
        }
        setLoading(false)
    }

    //retorna o contexto
    return <appContexto.Provider value={{user, setUser}}>
        {
            loading ? 
            <html>
                <body>
                    <h1>Carregando...</h1>
                </body>
            </html> 
            : 
            children
        }
    </appContexto.Provider>

}

//Exporta nosso contexto
export default appContexto;