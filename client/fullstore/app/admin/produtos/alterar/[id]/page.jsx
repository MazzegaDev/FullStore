"use client";


import FormProduto from "@/app/components/formProduto/FormProduto";
import { use, useEffect, useState } from "react";
import { apiClient } from "@/utils/apiClient";

export default function AlterPage({ params }) {
    const [produto, setProduto] = useState(null);
    const { id } = use(params);

    useEffect(() =>{
        buscarProduto();
    },[])

    async function buscarProduto() {
        let response = await apiClient.get(`/produto/${id}`);
        if (response) {
            console.log(response);
            setProduto(response);
        }
    }

    return (
        <div>
            {produto == null ? 
                <p>Carregando...</p>
             : 
                <FormProduto produto={produto}></FormProduto>
            }
        </div>
    );
}
