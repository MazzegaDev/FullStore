"use client";

import { useEffect, useRef, useState } from "react";
import "../../../../public/css/CadastroPage.css";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";

export default function CadastroPage() {
    const [marcas, setMarcas] = useState([]);
    const [categorias, setCategorias] = useState([]);

    const nomeRef = useRef("");
    const quantRef = useRef("");
    const precoRef = useRef("");
    const marcaRef = useRef("");
    const categoriaRef = useRef("");

    async function handleSubmit(e) {
        e.preventDefault();

        const nome = nomeRef.current.value.trim();
        const quant = parseInt(quantRef.current.value);
        const preco = parseFloat(precoRef.current.value);
        const marca = { marc_id: parseInt(marcaRef.current.value) };
        const categoria = { cate_id: parseInt(categoriaRef.current.value) };

        const produto = { nome, quant, preco, marca, categoria };

        if (
            nome &&
            quant > 0 &&
            preco > 0 &&
            marca.marc_id &&
            categoria.cate_id
        ) {
            try {
                const response = await fetch("http://localhost:5000/produto/", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(produto),
                });

                const data = await response.json();

                if (response.status === 200) {
                    toast.success(data.msg);
                } else {
                    toast.error(data.msg);
                }
            } catch (error) {
                console.error(error);
                toast.error(data.msg);
            }
        } else {
            toast.error("Preencha todos os campos corretamente!");
        }
    }

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
        <div className="container mt-4">
            <Toaster position="top-right" reverseOrder={false} />

            <div className="card shadow mb-4 border-0">
                <div className="card-header py-3 bg-primary text-white d-flex align-items-center">
                    <h6 className="m-0 fw-bold">
                        <i className="fas fa-box-open me-2"></i> Cadastro de Produto
                    </h6>
                </div>

                <div className="card-body">
                    <form className="row g-3" onSubmit={handleSubmit}>
                        {/* Produto */}
                        <div className="col-md-6">
                            <label htmlFor="nome" className="form-label fw-semibold">
                                <i className="fas fa-tag me-1"></i> Produto
                            </label>
                            <input
                                type="text"
                                className="form-control shadow-sm"
                                id="nome"
                                ref={nomeRef}
                                placeholder="Ex: Notebook, Camisa, Celular..."
                            />
                        </div>

                        {/* Quantidade */}
                        <div className="col-md-3">
                            <label htmlFor="quant" className="form-label fw-semibold">
                                <i className="fas fa-sort-numeric-up me-1"></i> Quantidade
                            </label>
                            <input
                                type="number"
                                className="form-control shadow-sm"
                                id="quant"
                                ref={quantRef}
                                min="1"
                            />
                        </div>

                        {/* Preço */}
                        <div className="col-md-3">
                            <label htmlFor="preco" className="form-label fw-semibold">
                                <i className="fas fa-dollar-sign me-1"></i> Preço
                            </label>
                            <input
                                type="number"
                                className="form-control shadow-sm"
                                id="preco"
                                step="0.01"
                                ref={precoRef}
                                min="0"
                            />
                        </div>

                        {/* Marca */}
                        <div className="col-md-6">
                            <label htmlFor="marca" className="form-label fw-semibold">
                                <i className="fas fa-industry me-1"></i> Marca
                            </label>
                            <div className="custom-select-wrapper">
                                <select
                                    id="marca"
                                    className="form-select shadow-sm"
                                    ref={marcaRef}
                                >
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
                            <label htmlFor="categoria" className="form-label fw-semibold">
                                <i className="fas fa-layer-group me-1"></i> Categoria
                            </label>
                            <div className="custom-select-wrapper">
                                <select
                                    id="categoria"
                                    className="form-select shadow-sm"
                                    ref={categoriaRef}
                                >
                                    <option value="0">--Selecione--</option>
                                    {categorias.map((obj, index) => (
                                        <option key={index} value={obj.cate_id}>
                                            {obj.cate_nome}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* Botões */}
                        <div className="col-12 mt-4 d-flex justify-content-between">
                            <Link
                                href="/admin/produtos/"
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
