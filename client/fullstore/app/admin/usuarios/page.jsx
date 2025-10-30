"use client";

import { apiClient } from "@/utils/apiClient";
import { useEffect, useState } from "react";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";

export default function UsuariosPage() {
    const [lista, setLista] = useState([]);

    useEffect(() => {
        buscarUsuarios();
    }, []);

    async function buscarUsuarios() {
        try {
            const response = await apiClient.get("/usuario");
            if(response.msg){
                setLista(response);
            }
        } catch (error) {
            console.log(error);
            toast.error("Erro ao buscar usuários!");
        }
    }

    async function deletarUsuario(obj) {
        try {
            let id = obj.usu_id;
            const response = await apiClient.delete(`/usuario/${id}`);
            buscarUsuarios();
            if(response.msg){
                toast.success(response.msg);
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="card shadow mb-4">
            <Toaster position="top-right" reverseOrder={false} />

            <div className="card-header py-3 d-flex justify-content-between align-items-center">
                <h6 className="m-0 font-weight-bold text-primary">
                    <i className="fas fa-users me-2"></i>
                    Usuários Cadastrados
                </h6>
                <Link
                    href="/admin/usuarios/cadastrar"
                    className="btn btn-primary btn-sm shadow-sm"
                >
                    <i className="fas fa-plus-circle me-1"></i> Novo Usuário
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
                                    <i className="fas fa-user me-1"></i>Nome
                                </th>
                                <th>
                                    <i className="fas fa-envelope me-1"></i>
                                    Email
                                </th>
                                <th>
                                    <i className="fas fa-user-shield me-1"></i>
                                    Perfil Associado
                                </th>
                                <th>
                                    <i className="fas fa-align-left me-1"></i>
                                    Descrição do Perfil
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
                                        <td>{obj.usu_id}</td>
                                        <td>{obj.usu_nome}</td>
                                        <td>{obj.usu_email}</td>
                                        <td>{obj.per_id.per_id}</td>
                                        <td>{obj.per_id.per_desc}</td>
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
                                                    onClick={() => deletarUsuario(obj)}
                                                >
                                                    <i className="fas fa-trash-alt"></i>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="5" className="text-muted py-4">
                                        <i className="fas fa-info-circle me-2"></i>
                                        Nenhum usuário cadastrado.
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
