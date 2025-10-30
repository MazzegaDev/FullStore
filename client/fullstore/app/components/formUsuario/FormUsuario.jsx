"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { apiClient } from "@/utils/apiClient";
import toast, { Toaster } from "react-hot-toast";
import "../../..//public/css/CadastroPage.css";

export default function FormUsuario() {
    const [lista, setLista] = useState([]);

    const nomeRef = useRef("");
    const emailRef = useRef("");
    const senhaRef = useRef("");
    const saldoRef = useRef("");
    const perfilRef = useRef("");


    useEffect(() => {
        buscaPerfil();
    }, []);

    async function buscaPerfil() {
        try {
            const response = await apiClient.get("/perfil/");
            setLista(response);
        } catch (error) {
            console.error("Erro ao buscar perfis:", error);
            toast.error("Erro ao buscar perfis!");
        }
    }

    async function handleSubmit(e) {
        e.preventDefault();

        const nome = nomeRef.current.value.trim();
        const email = emailRef.current.value.trim();
        const senha = senhaRef.current.value.trim();
        const saldo = Number(saldoRef.current.value);
        const idP = {per_id: parseInt(perfilRef.current.value)}

        if(!nome && !email && !senha && !idP){
            toast.error("O usuario não pode conter informações invalidas");
        }

        const obj = {
            nome,
            email,
            senha,
            saldo,
            idP,
        }

        try {
            const response = await apiClient.post("/usuario/", obj);
            if(response.msg){
                toast.success(response.msg);
                nomeRef.current.value = "";
                emailRef.current.value = "";
                senhaRef.current.value = "";
                saldoRef.current.value = 0;
                perfilRef.current.value = 0;
            }
        } catch (error) {
            toast.error("Erro ao cadastrar usuario.")
            console.log(error);
        }
    }

    return (
        <div className="container mt-4">
            <Toaster position="top-right" reverseOrder={false} />
            <div className="card shadow mb-4 border-0">
                <div className="card-header py-3 bg-primary text-white d-flex align-items-center">
                    <h6 className="m-0 fw-bold">
                        <i className="fas fa-user me-2"></i>
                        Cadastro de Usuário
                    </h6>
                </div>

                <div className="card-body">
                    <div className="row g-3">
                        <div className="col-md-6">
                            <label
                                htmlFor="nome"
                                className="form-label fw-semibold"
                            >
                                <i className="fas fa-user me-1"></i> Nome
                            </label>
                            <input
                                type="text"
                                className="form-control shadow-sm"
                                id="nome"
                                ref={nomeRef}
                                placeholder="Digite o nome do usuário"
                            />
                        </div>

                        <div className="col-md-6">
                            <label
                                htmlFor="email"
                                className="form-label fw-semibold"
                            >
                                <i className="fas fa-envelope me-1"></i> Email
                            </label>
                            <input
                                type="email"
                                className="form-control shadow-sm"
                                id="email"
                                ref={emailRef}
                                placeholder="Digite o email"
                            />
                        </div>

                        <div className="col-md-6">
                            <label
                                htmlFor="saldo"
                                className="form-label fw-semibold"
                            >
                                <i className="fas fa-money-bill"></i> Saldo
                            </label>
                            <input
                                type="number"
                                className="form-control shadow-sm"
                                id="email"
                                ref={saldoRef}
                               
                            />
                        </div>

                        <div className="col-md-6">
                            <label
                                htmlFor="senha"
                                className="form-label fw-semibold"
                            >
                                <i className="fas fa-lock me-1"></i> Senha
                            </label>
                            <input
                                type="password"
                                className="form-control shadow-sm"
                                id="senha"
                                ref={senhaRef}
                                placeholder="Digite a senha"
                            />
                        </div>

                        <div className="col-md-6">
                            <label
                                htmlFor="perfil"
                                className="form-label fw-semibold"
                            >
                                <i className="fas fa-id-badge me-1"></i> Perfil
                            </label>
                            <div className="custom-select-wrapper">
                                <select
                                    id="perfil"
                                    className="form-select shadow-sm"
                                    defaultValue="0"
                                    ref={perfilRef}
                                >
                                    <option value="0">-- Selecione --</option>
                                    {lista.map((obj, index) => (
                                        <option value={obj.per_id} key={index}>
                                            {obj.per_desc}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className="col-12 mt-4 d-flex justify-content-between">
                            <Link
                                href="/admin/usuarios"
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
                                <span className="text" onClick={handleSubmit}>Gravar</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
