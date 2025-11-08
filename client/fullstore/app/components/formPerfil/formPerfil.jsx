"use client";

import { apiClient } from "@/utils/apiClient";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import "../../..//public/css/CadastroPage.css";
import { useRouter } from "next/navigation";

export default function FormPerfil({ perfil }) {
    let descRef = useRef("");
    let admRef = useRef("");
    const [monitor, setMonitor] = useState(false);
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            buscarPerfil();
        }, 12);
    }, []);

    function buscarPerfil() {
        if (perfil) {
            descRef.current.value = perfil.per_desc;
            admRef.current.value = perfil.per_adm;
            setMonitor(true);
        }
    }

    async function alterarPerfil() {
        let id = perfil.per_id;
        let desc = descRef.current.value.trim();
        let adm = admRef.current.value;

        if (!desc && !adm) {
            toast.error("O perfil não pode conter dados invalidos.");
        }

        const obj = {
            id,
            desc,
            adm,
        };

        try {
            const response = await apiClient.put("/perfil", obj);
            if (response.msg) {
                toast.success(response.msg);
                router.replace("/admin/perfis/");
            }
        } catch (error) {
            console.log(error);
            toast.error("Erro ao cadastrar perfil.");
        }
    }

    async function handleSubmit() {
        let desc = descRef.current.value.trim();
        let adm = admRef.current.value;

        if (!desc && !adm) {
            toast.error("O perfil não pode conter dados invalidos.");
        }

        const obj = {
            desc,
            adm,
        };

        try {
            const response = await apiClient.post("/perfil", obj);
            if (response.msg) {
                toast.success(response.msg);
                router.replace("/admin/perfis/");
            }
        } catch (error) {
            console.log(error);
            toast.error("Erro ao cadastrar perfil.");
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
                                <i className="fas fa-user-shield me-2"></i>
                                {monitor
                                    ? "Alterar perfil"
                                    : "Cadastro de Perfil"}
                            </h4>
                        </div>

                        <div className="card-body p-4">
                            <div className="mb-3">
                                <label
                                    htmlFor="desc"
                                    className="form-label fw-semibold"
                                >
                                    <i className="fas fa-pen me-2 text-secondary"></i>
                                    Descrição
                                </label>
                                <input
                                    type="text"
                                    id="desc"
                                    className="form-control shadow-sm"
                                    placeholder="Digite a descrição do perfil"
                                    ref={descRef}
                                />
                            </div>

                            <div className="mb-3">
                                <label
                                    htmlFor="adm"
                                    className="form-label fw-semibold"
                                    style={{ paddingRight: 10 }}
                                >
                                    <i className="fas fa-user-cog me-2 text-secondary"></i>
                                    Perfil Administrador?
                                </label>
                                <div className="custom-select-wrapper">
                                    <select
                                        id="adm"
                                        className="form-select shadow-sm"
                                        ref={admRef}
                                        defaultValue="0"
                                    >
                                        <option value="1">Sim</option>
                                        <option value="0">Não</option>
                                    </select>
                                </div>
                            </div>

                            <div className="d-flex justify-content-between mt-4">
                                <Link
                                    href="/admin/perfis"
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
                                    onClick={
                                        monitor ? alterarPerfil : handleSubmit
                                    }
                                >
                                    <span className="icon text-white-50">
                                        <i className="fas fa-save"></i>
                                    </span>
                                    <span className="text">
                                        {monitor ? "Alterar" : "Gravar"}
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
