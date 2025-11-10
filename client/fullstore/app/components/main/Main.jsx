"use client";
import { useEffect, useState } from "react";
import "./styleM.css";
import Tittle from "../tittle/Tittle";
import { apiClient } from "@/utils/apiClient";
import ProdutoCard from "../produtoCard/ProdutoCard";

export default function Main() {
    const [lista, setLista] = useState([]);

    useEffect(() => {
        buscarProduto();
    }, []);

    async function buscarProduto() {
        try {
            const response = await apiClient.get("/produto");
            setLista(response);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <main>
            <Tittle titulo={"Confira nossos produtos"}></Tittle>
            <section className="testeDiv">
                    {lista.map((obj, index) => (
                        <ProdutoCard
                            key={index}
                            id={obj.prod_id}
                            marca={obj.marc_id.marc_nome}
                            preco={obj.prod_preco}
                            nome={obj.prod_nome}
                        ></ProdutoCard>
                    ))}
            </section>
        </main>
    );
}
