"use client";

import { useEffect, useState } from "react";
import "../../../../public/css/CadastroPage.css"; // CSS customizado para dropdowns
import Link from "next/link";

export default function CadastroPage() {
    const [marcas, setMarcas] = useState([]);
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        buscaMarcas();
        buscaCategoria();
    }, []);

    async function buscaMarcas() {
        try {
            const response = await fetch("http://localhost:5000/marca/");
            const corpo = await response.json();
            setMarcas(corpo);
        } catch (error) {
            console.error("Erro ao buscar marcas:", error);
        }
    }

    async function buscaCategoria() {
        try {
            const response = await fetch("http://localhost:5000/categoria/");
            const corpo = await response.json();
            setCategorias(corpo);
        } catch (error) {
            console.error("Erro ao buscar categorias:", error);
        }
    }

    return (
        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">
                    <i className="fas fa-box-open me-2"></i> Cadastro de Produto
                </h6>
            </div>
            <div className="card-body">
                <form className="row g-3">
                    {/* Produto */}
                    <div className="col-md-6">
                        <label
                            htmlFor="nome"
                            className="form-label fw-semibold"
                        >
                            <i className="fas fa-tag me-1"></i> Produto
                        </label>
                        <input type="text" className="form-control" id="nome" />
                    </div>

                    {/* Quantidade */}
                    <div className="col-md-3">
                        <label
                            htmlFor="quant"
                            className="form-label fw-semibold"
                        >
                            <i className="fas fa-sort-numeric-up me-1"></i>{" "}
                            Quantidade
                        </label>
                        <input
                            type="number"
                            className="form-control"
                            id="quant"
                        />
                    </div>

                    {/* Preço */}
                    <div className="col-md-3">
                        <label
                            htmlFor="preco"
                            className="form-label fw-semibold"
                        >
                            <i className="fas fa-dollar-sign me-1"></i> Preço
                        </label>
                        <input
                            type="number"
                            className="form-control"
                            id="preco"
                            step="0.01"
                        />
                    </div>

                    {/* Marca */}
                    <div className="col-md-6">
                        <label
                            htmlFor="marca"
                            className="form-label fw-semibold"
                        >
                            <i className="fas fa-industry me-1"></i> Marca
                        </label>
                        <div className="custom-select-wrapper">
                            <select id="marca">
                                <option value="0">--Selecione--</option>
                                {marcas.map((obj, index) => (
                                    <option key={index} value={obj.marc_id}>
                                        {obj.marc_nome}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Categoria */}
                    <div className="col-md-6">
                        <label
                            htmlFor="categoria"
                            className="form-label fw-semibold"
                        >
                            <i className="fas fa-layer-group me-1"></i>{" "}
                            Categoria
                        </label>
                        <div className="custom-select-wrapper">
                            <select id="categoria">
                                <option value="0">--Selecione--</option>
                                {categorias.map((obj, index) => (
                                    <option key={index} value={obj.cate_id}>
                                        {obj.cate_nome}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Botão Gravar */}
                    <div className="col-12 mt-3">
                        <button className="btn btn-primary shadow-sm">
                            <i className="fas fa-save me-1"></i> Gravar
                        </button>
                    </div>
                    <div className="col-12 mt-3">
                        <Link
                            href="/admin/produtos/"
                            className="btn btn-secondary btn-icon-split shadow-sm"
                        >
                            <span className="icon text-white-50">
                                <i className="fas fa-arrow-left"></i>
                            </span>
                            <span className="text">Voltar</span>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
