"use client";

import { apiClient } from "@/utils/apiClient";
import { useEffect, useState } from "react";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";

export default function PerfilPage() {
    const [lista, setLista] = useState([]);

   

    useEffect(() => {
        buscarPerfis();
    }, []);

    async function buscarPerfis() {
        try {
            const response = await apiClient.get("/perfil");
            setLista(response);
        } catch (error) {
            console.error("Erro ao buscar perfis:", error);
            toast.error("Erro ao buscar perfis!");
        }
    }

    async function deletarPerfil(obj) {
        try {
            let id = obj.per_id;
            const response = await apiClient.delete(`/perfil/${id}`);
            buscarPerfis();
            if (response.msg) {
                toast.success(response.msg);
            }
        } catch (error) {
            console.log(error);
            toast.error(error);
        }
    }

    return (
        <div className="card shadow mb-4">
            <Toaster position="top-right" reverseOrder={false} />

            <div className="card-header py-3 d-flex justify-content-between align-items-center">
                <h6 className="m-0 font-weight-bold text-primary">
                   <i className="fas fa-address-card"></i>
                    Perfis Cadastrados
                </h6>
                <Link
                    href="/admin/perfis/cadastrar"
                    className="btn btn-primary btn-sm shadow-sm"
                >
                    <i className="fas fa-plus-circle me-1"></i> Novo Perfil
                </Link>
            </div>

            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-hover align-middle text-center">
                        <thead className="table-primary">
                            <tr>
                                <th>
                                    <i className="fas fa-id-badge me-1"></i>ID
                                </th>
                                <th>
                                    <i className="fas fa-user-shield me-1"></i>
                                    Administrador
                                </th>
                                <th>
                                    <i className="fas fa-align-left me-1"></i>
                                    Descrição
                                </th>
                                <th>
                                    <i className="fas fa-cog"></i>Ações
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {lista.length > 0 ? (
                                lista.map((obj, index) => (
                                    <tr key={index}>
                                        <td>{obj.per_id}</td>
                                        <td>
                                            {obj.per_adm ? (
                                                <span className="badge bg-success shadow-sm">
                                                    <i className="fas fa-check"></i>{" "}
                                                    Sim
                                                </span>
                                            ) : (
                                                <span className="badge bg-danger shadow-sm">
                                                    <i className="fas fa-times"></i>{" "}
                                                    Não
                                                </span>
                                            )}
                                        </td>
                                        <td className="fw-semibold text-start">
                                            {obj.per_desc}
                                        </td>
                                        <td>
                                            <div className="d-flex justify-content-center gap-2">
                                                <Link href="">
                                                    <button
                                                        className="btn btn-sm btn-warning"
                                                        title="Editar"
                                                    >
                                                        <i className="fas fa-edit"></i>
                                                    </button>
                                                </Link>
                                                <button
                                                    className="btn btn-sm btn-danger"
                                                    title="Excluir"
                                                    onClick={() => deletarPerfil(obj)}
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
                                        Nenhum perfil encontrado.
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
