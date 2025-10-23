"use client";

import { apiClient } from "@/utils/apiClient";
import { useEffect, useState } from "react";

export default function AlterPage() {
    const [lista, setLista] = useState([]);
    useEffect(() => {
        buscaProduto();
    }, []);
    async function buscaProduto() {

    }

    return <h1>Alterar Produto</h1>;
}
