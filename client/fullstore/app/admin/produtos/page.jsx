"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { apiClient, ApiClient } from "@/utils/apiClient";
import toast, { Toaster } from "react-hot-toast";

export default function ProdutosPage() {
    const [lista, setLista] = useState([]);

    useEffect(() => {
        buscarProdutos();
    }, []); 

    // buscarProdutos()
    
    async function deletarProduto(obj) {
        try {
            //Desse objeto completo so recuperramos o d do produto
            let id = obj.prod_id;
            let response = await apiClient.delete(`/produto/${id}`);
            buscarProdutos();
            if (response.msg) {
                toast.success(response.msg);
            }
        } catch (error) {
            console.log(error);
        }
    }

    async function buscarProdutos() {
        try {
            const response = await apiClient.get("/produto");
            if(response.msg){
                setLista(response);
            }
        } catch (error) {
            console.error("Erro ao buscar produtos:", error);
        }
    }

    return (
        <div className="card shadow mb-4">
            <Toaster position="top-right" reverseOrder={false} />
            <div className="card-header py-3 d-flex justify-content-between align-items-center">
                <h6 className="m-0 font-weight-bold text-primary">
                    <i className="fas fa-box-open"></i>
                    Produtos Cadastrados
                </h6>
                <Link
                    href="/admin/produtos/cadastrar"
                    className="btn btn-primary btn-sm shadow-sm"
                >
                    <i className="fas fa-plus-circle me-1"></i> Novo Produto
                </Link>
            </div>

            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-hover align-middle text-center">
                        <thead className="table-primary">
                            <tr>
                                <th>
                                    <i className="fas fa-id-badge"></i> ID
                                </th>
                                <th>
                                    <i className="fas fa-tag"></i> Nome
                                </th>
                                <th>
                                    <i className="fas fa-boxes"></i> Estoque
                                </th>
                                <th>
                                    <i className="fas fa-calendar-alt"></i> Data
                                </th>
                                <th>
                                    <i className="fas fa-dollar-sign"></i> Preço
                                </th>
                                <th>
                                    <i className="fas fa-industry"></i> Marca
                                </th>
                                <th>
                                    <i className="fas fa-layer-group"></i>{" "}
                                    Categoria
                                </th>
                                <th>
                                    <i className="fas fa-cog"></i> Ações
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {lista.length > 0 ? (
                                lista.map((obj, index) => (
                                    <tr key={index} className="align-middle">
                                        <td>{obj.prod_id}</td>
                                        <td className="text-start fw-semibold">
                                            {obj.prod_nome}
                                        </td>
                                        <td>{obj.prod_quant}</td>
                                        <td>
                                            {new Date(
                                                obj.prod_caddat
                                            ).toLocaleDateString()}
                                        </td>
                                        <td>R$ {obj.prod_preco}</td>
                                        <td>{obj.marc_id?.marc_nome ?? "-"}</td>
                                        <td>{obj.cate_id?.cate_nome ?? "-"}</td>
                                        <td>
                                            <div className="d-flex justify-content-center gap-2">
                                                <Link
                                                    href={
                                                        "/admin/produtos/alterar/" +
                                                        obj.prod_id
                                                    }
                                                >
                                                    <button
                                                        className="btn btn-sm btn-warning"
                                                        title="Editar"
                                                    >
                                                        <i className="fas fa-edit"></i>
                                                    </button>
                                                </Link>
                                                <button
                                                    className="btn btn-sm btn-danger"
                                                    //Passamos o objeto completo (produto) para a funçao de deletar
                                                    onClick={() =>
                                                        deletarProduto(obj)
                                                    }
                                                    title="Excluir"
                                                >
                                                    <i className="fas fa-trash-alt"></i>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="8" className="text-muted py-4">
                                        <i className="fas fa-info-circle me-2"></i>
                                        Nenhum produto encontrado.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
