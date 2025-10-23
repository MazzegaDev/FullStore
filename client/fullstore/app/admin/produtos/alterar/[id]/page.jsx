"use client";

import { apiClient } from "@/utils/apiClient";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import FormProduto from "@/app/components/formProduto/FormProduto";


export default function AlterPage() {
    const [lista, setLista] = useState([]);
    let { id } = useParams();

    useEffect(() => {
        buscaProduto();
    }, [id]);
    async function buscaProduto() {
        try {
            let response = await apiClient.get(`/produto/${id}`);
            setLista(response);
            console.log(response)
        } catch (error) {
            console.log(error);
            alert("erro ao buscar produo", error);
        }
    }

    return (
        <div>
            <div>
                <Toaster/>
            </div>
            {/* bugado */}
            {/* <FormProduto></FormProduto> */}
        </div>
    );
}
