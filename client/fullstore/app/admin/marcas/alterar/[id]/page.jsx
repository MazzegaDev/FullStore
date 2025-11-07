'use client'

import FormMarca from "@/app/components/formMarca/formMarca";
import { apiClient } from "@/utils/apiClient";
import { use, useEffect, useState } from "react"

export default function PageAlterar({params}){
    const [marca, setMarca] = useState(null);
    let {id} = use(params);
    
    useEffect(() => {
        buscarMarcas();
    }, []);

    async function buscarMarcas() {
        let response = await apiClient.get(`/marca/${id}`);
        if(response){
            setMarca(response);
        }
    }
    
    return (
        <div>

            {
                marca == null ? <p>Carregando</p> :
                <FormMarca marca={marca}></FormMarca>
            }
        </div>
    )
}