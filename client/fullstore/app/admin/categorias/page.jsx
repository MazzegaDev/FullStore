"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { apiClient } from "@/utils/apiClient";

export default function CategoriaPage() {
    const [lista, setLista] = useState([]);

    useEffect(() => {
        buscaCategoria();
    }, []);

    async function buscaCategoria() {
        try {
            const response = await apiClient.get("/categoria/");
            setLista(response);
        } catch (error) {
            console.error("Erro ao buscar categorias:", error);
        }
    }

    return (
        <div className="card shadow mb-4">
            {/* Cabeçalho */}
            <div className="card-header py-3 d-flex justify-content-between align-items-center">
                <h6 className="m-0 font-weight-bold text-primary">
                    <i className="fas fa-layer-group me-2"></i>
                    Categorias Cadastradas
                </h6>
                <Link href="/admin/categorias/cadastrar" className="btn btn-primary btn-sm shadow-sm">
                    <i className="fas fa-plus-circle me-1"></i> Nova Categoria
                </Link>
            </div>

            {/* Corpo */}
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-hover align-middle text-center">
                        <thead className="table-primary">
                            <tr>
                                <th><i className="fas fa-id-badge"></i> ID</th>
                                <th><i className="fas fa-tag"></i> Nome da Categoria</th>
                                <th><i className="fas fa-cog"></i> Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {lista.length > 0 ? (
                                lista.map((obj, index) => (
                                    <tr key={index}>
                                        <td>{obj.cate_id}</td>
                                        <td className="text-start fw-semibold">{obj.cate_nome}</td>
                                        <td>
                                            <div className="d-flex justify-content-center gap-2">
                                                <button className="btn btn-sm btn-warning" title="Editar">
                                                    <i className="fas fa-edit"></i>
                                                </button>
                                                <button className="btn btn-sm btn-danger" title="Excluir">
                                                    <i className="fas fa-trash-alt"></i>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="3" className="text-muted py-4">
                                        <i className="fas fa-info-circle me-2"></i>
                                        Nenhuma categoria cadastrada.
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
