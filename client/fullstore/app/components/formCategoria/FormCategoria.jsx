"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import { apiClient } from "@/utils/apiClient";

export default function FormCategoria({categoria}) {
    const nomeRef = useRef("");
    const [monitor, setMonitor] = useState(false);
    
    useEffect(() => {
        setTimeout(() => {
            buscarCategorias();
        }, 12)
    }, []);

    function buscarCategorias(){
        if(categoria){
            nomeRef.current.value = categoria.cate_nome;
            setMonitor(true);
        }
    }

    async function alterar() {
        const nome = nomeRef.current.value.trim();
        const id = categoria.cate_id;
        if (!nome) {
            toast.error("Preencha o nome da categoria");
            return;
        }

        const obj = { id, nome };
        try {
            const response = await apiClient.put("/categoria", obj);
            if (response.msg) {
                toast.success(response.msg);
                nomeRef.current.value = "";
            } else {
                toast.error("Resposta inesperada do servidor");
            }
        } catch (error) {
            console.error(error);
            toast.error("Erro ao alterar categoria");
        }
    }

    async function handleSubmit() {
       

        const nome = nomeRef.current.value.trim();

        if (!nome) {
            toast.error("Preencha o nome da categoria");
            return;
        }

        const obj = { nome };
        try {
            const response = await apiClient.post("/categoria", obj);
            if (response.msg) {
                toast.success(response.msg);
                nomeRef.current.value = "";
            } else {
                toast.error("Resposta inesperada do servidor");
            }
        } catch (error) {
            console.error(error);
            toast.error("Erro ao cadastrar categoria");
        }
    }

    return (
        <div className="container mt-5">
            <Toaster position="top-right" reverseOrder={false} />

            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <div className="card shadow-lg border-0 rounded-3">
                        <div className="card-header bg-primary text-white py-3">
                            <h4 className="mb-0">
                                <i className="fas fa-list-alt"></i>
                                {
                                    monitor ? "Alterar categoria" : "Cadastrar"
                                }
                                
                            </h4>
                        </div>

                        <div className="card-body p-4">
                            <div>
                                <div className="mb-3">
                                    <label htmlFor="nome" className="form-label fw-semibold">
                                        <i className="fas fa-pen me-2 text-secondary"></i>
                                        Nome da categoria
                                    </label>
                                    <input
                                        type="text"
                                        id="nome"
                                        ref={nomeRef}
                                        className="form-control shadow-sm"
                                        placeholder="Digite o nome da categoria"
                                    />
                                </div>

                                <div className="d-flex justify-content-between mt-4">
                                    <Link
                                        href="/admin/categorias/"
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
                                        <span className="text" onClick={alterar ? alterar : handleSubmit}>{monitor ? "Alterar" : "Gravar"}</span>
                                    </button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
