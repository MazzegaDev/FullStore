"use client";

import { useEffect, useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import Link from "next/link";
import { apiClient, ApiClient } from "@/utils/apiClient";

export default function CadastroPage() {
    const nomeRef = useRef("");

    async function handleSubmit(e) {
        e.preventDefault();

        const nome = nomeRef.current.value.trim();
        
        if (!nome) {
            toast.error("Preencha o nome da marca");
            return;
        }

        const marca = { nome };

        try {
            const response = await apiClient.post("/marca", marca);
            if (response.msg){
                toast.success(response.msg)
            }
        } catch (error) {
            console.error(error);
            toast.error("Erro ao conectar com o servidor");
        }
    }

    return (
        <div className="container mt-5">
            <Toaster position="top-right" />

            <div className="card shadow-lg border-0">
                <div className="card-header bg-primary text-white">
                    <h4 className="mb-0">
                        <i className="fas fa-tags me-2"></i>Cadastro de Marca
                    </h4>
                </div>

                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="nome" className="form-label fw-semibold">
                                <i className="fas fa-pen me-2 text-secondary"></i>
                                Nome da Marca
                            </label>
                            <input
                                type="text"
                                className="form-control shadow-sm"
                                id="nome"
                                placeholder="Ex: Nike, Samsung, Nestlé..."
                                ref={nomeRef}
                            />
                        </div>

                        <div className="d-flex justify-content-between mt-4">
                            <Link
                                href="/admin/marcas/"
                                className="btn btn-secondary btn-icon-split shadow-sm"
                            >
                                <span className="icon text-white-50">
                                    <i className="fas fa-arrow-left"></i>
                                </span>
                                <span className="text">Voltar</span>
                            </Link>

                            <button
                                type="submit"
                                className="btn btn-success btn-icon-split shadow-sm"
                            >
                                <span className="icon text-white-50">
                                    <i className="fas fa-save"></i>
                                </span>
                                <span className="text">Gravar</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
