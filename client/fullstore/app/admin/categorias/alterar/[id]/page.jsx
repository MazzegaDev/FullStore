'use client'

import FormCategoria from "@/app/components/formCategoria/FormCategoria"
import { apiClient } from "@/utils/apiClient";

import { use, useEffect, useState } from "react"

export default function PageAlterar({params}){
    const [categoria, setCategoria] = useState(null);

    const {id} = use(params);

    useEffect(() => {
        buscarCategoria();
    }, [])

    async function buscarCategoria() {
        let response = await apiClient.get(`/categoria/${id}`);
        if(response){
            setCategoria(response);
        }
    }

    return(
        <div>
            {
                categoria == null ? <p>Carregando</p> :  <FormCategoria categoria={categoria}></FormCategoria>
            }
           
        </div>
    )
}