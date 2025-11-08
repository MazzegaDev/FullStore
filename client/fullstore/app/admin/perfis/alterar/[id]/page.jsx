'use client'

import FormPerfil from "@/app/components/formPerfil/formPerfil";
import { apiClient } from "@/utils/apiClient";
import { use, useEffect, useState } from "react";

export default function AlterarPage({params}){
    const [perfil, setPerfil] = useState(null);

    const { id } = use(params);

    useEffect(() => {
        buscarPerfil();
    }, []);

    async function buscarPerfil() {
        const response = await apiClient.get(`/perfil/${id}`);
        if(response){
            setPerfil(response);
        }
    }   

    return (
        <div>
            {
                perfil == null ? <p>Carregando</p> : 
                <FormPerfil perfil={perfil}></FormPerfil>
            }
        </div>
    )

}