"use client";

import Link from "next/link";
import { Toaster } from "react-hot-toast";

export default function FormPerfil() {
    return (
        <div className="container mt-5">
            <Toaster position="top-right" reverseOrder={false} />

            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <div className="card shadow-lg border-0 rounded-3">
                        <div className="card-header bg-primary text-white py-3">
                            <h4 className="mb-0">
                                <i className="fas fa-user-shield me-2"></i>
                                Cadastro de Perfil
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
                                />
                            </div>

                            <div className="mb-3">
                                <label
                                    htmlFor="adm"
                                    className="form-label fw-semibold"
                                    style={ {paddingRight: 10}}
                                >
                                    <i className="fas fa-user-cog me-2 text-secondary"></i>
                                    Perfil Administrador?
                                </label>
                                <select
                                    id="adm"
                                    className="form-select shadow-sm rounded-3 border-secondary-subtle py-2 pe-5"
                                    
                                    defaultValue="0"
                                >
                                    <option value="1">Sim</option>
                                    <option value="0">Não</option>
                                </select>
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
                                >
                                    <span className="icon text-white-50">
                                        <i className="fas fa-save"></i>
                                    </span>
                                    <span className="text">Gravar</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
