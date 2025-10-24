"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { apiClient } from "@/utils/apiClient";
import toast, { Toaster } from "react-hot-toast";

export default function MarcasPage() {
    const [lista, setLista] = useState([]);

    useEffect(() => {
        buscaMarcas();
         deletarMarca();
    }, []);

    async function buscaMarcas() {
        try {
            const response = await apiClient.get("/marca/");
            setLista(response);
        } catch (error) {
            console.error("Erro ao buscar marcas:", error);
        }
    }

   

    async function deletarMarca(obj){
        try {
            let id = obj.marc_id
            let response = await apiClient.delete(`/marca/${id}`);
            if(response.msg){
                toast.success(response.msg)
            }
        } catch (error) {
            console.log(error)
        }
        
    }

    return (
        <div className="card shadow mb-4">
            {/* Cabeçalho */}
            <Toaster position="top-right" reverseOrder={false} />
            <div className="card-header py-3 d-flex justify-content-between align-items-center">
                <h6 className="m-0 font-weight-bold text-primary">
                    <i className="fas fa-industry me-2"></i>
                    Marcas Cadastradas
                </h6>
                <Link
                    href="/admin/marcas/cadastrar"
                    className="btn btn-primary btn-sm shadow-sm"
                >
                    <i className="fas fa-plus-circle me-1"></i> Nova Marca
                </Link>
            </div>

            {/* Corpo */}
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
                                    <i className="fas fa-cog"></i> Ações
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {lista.length > 0 ? (
                                lista.map((obj, index) => (
                                    <tr key={index}>
                                        <td>{obj.marc_id}</td>
                                        <td className="text-start fw-semibold">
                                            {obj.marc_nome}
                                        </td>
                                        <td>
                                            <div className="d-flex justify-content-center gap-2">
                                                <button
                                                    className="btn btn-sm btn-warning"
                                                    title="Editar"
                                                >
                                                    <i className="fas fa-edit"></i>
                                                </button>
                                                <button
                                                    className="btn btn-sm btn-danger"
                                                    onClick={() => deletarMarca(obj)}
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
                                    <td colSpan="3" className="text-muted py-4">
                                        <i className="fas fa-info-circle me-2"></i>
                                        Nenhuma marca cadastrada.
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
