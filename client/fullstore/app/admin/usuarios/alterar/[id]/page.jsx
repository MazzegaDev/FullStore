'use client'

import FormUsuario from "@/app/components/formUsuario/FormUsuario";
import { apiClient } from "@/utils/apiClient";
import { use, useEffect, useState } from "react"

export default function AlterarPage({params}){
    const [usuario, setUsuario] = useState(null)
    const { id } = use(params);

    useEffect(() => {
        buscarUser();
    }, []);

    async function buscarUser() {
        const response = await apiClient.get(`/usuario/${id}`);
        if(response){
            setUsuario(response);
        }
    }

    return (
        <div>

            {
                usuario == null ? <p>Carregando</p> : <FormUsuario usuario={usuario}/>
            }
        </div>
    )
}