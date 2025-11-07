"use client";

import { useEffect, useRef, useState } from "react";
import "../../..//public/css/CadastroPage.css";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import { apiClient, ApiClient } from "@/utils/apiClient";
import { useRouter } from "next/navigation";

export default function FormProduto({ produto }) {
    const [marcas, setMarcas] = useState([]);
    const [categorias, setCategorias] = useState([]);
    const [alterar, setAlterar] = useState(false);

    const router = useRouter();

    useEffect(() => {
        buscaMarcas();
        buscaCategoria();
        setTimeout(() => {
            buscarProduto();
        }, 12);
    }, []);

    const nomeRef = useRef("");
    const quantRef = useRef("");
    const precoRef = useRef("");
    const marcaRef = useRef("");
    const categoriaRef = useRef("");

    async function handleSubmit() {
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
                const response = await apiClient.post("/produto", produto);

                if (response.msg) {
                    router.replace("/admin/produtos")
                    toast.success(response.msg);
                    nomeRef.current.value = "";
                    quantRef.current.value = "";
                    precoRef.current.value = "";
                    marcaRef.current.value = 0;
                    categoriaRef.current.value = 0;
                }
            } catch (error) {
                console.error(error);
            }
        } else {
            toast.error("Preencha todos os campos corretamente!");
        }
    }

    async function alterarProduto() {
        const id = produto.prod_id;
        const nome = nomeRef.current.value.trim();
        const quant = parseInt(quantRef.current.value);
        const preco = parseFloat(precoRef.current.value);
        const marca = { marc_id: parseInt(marcaRef.current.value) };
        const categoria = { cate_id: parseInt(categoriaRef.current.value) };

        if (
            nome &&
            quant > 0 &&
            preco > 0 &&
            marca.marc_id &&
            categoria.cate_id
        ) {
            try {
                const produto = { id, nome, quant, preco, marca, categoria };

                const response = await apiClient.put("/produto", produto);

                if (response.msg) {
                    toast.success(response.msg);
                    nomeRef.current.value = "";
                    quantRef.current.value = "";
                    precoRef.current.value = "";
                    marcaRef.current.value = 0;
                    categoriaRef.current.value = 0;
                }
            } catch (error) {
                console.error(error);
            }
        } else {
            toast.error("Preencha todos os campos corretamente!");
        }
    }

    function buscarProduto() {
        if (produto) {
            nomeRef.current.value = produto.prod_nome;
            quantRef.current.value = produto.prod_quant;
            precoRef.current.value = produto.prod_preco;
            marcaRef.current.value = produto.marc_id.marc_id;
            categoriaRef.current.value = produto.cate_id.cate_id;
            setAlterar(true);
        }
    }

    async function buscaMarcas() {
        try {
            const response = await apiClient.get("/marca");
            setMarcas(response);
        } catch (error) {
            console.error("Erro ao buscar marcas:", error);
        }
    }

    async function buscaCategoria() {
        try {
            const response = await apiClient.get("/categoria");
            setCategorias(response);
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
                        <i className="fas fa-box-open me-2"></i> Cadastro de
                        Produto
                    </h6>
                </div>

                <div className="card-body">
                    <div className="row g-3">
                        {/* Produto */}
                        <div className="col-md-6">
                            <label
                                htmlFor="nome"
                                className="form-label fw-semibold"
                            >
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
                            <label
                                htmlFor="quant"
                                className="form-label fw-semibold"
                            >
                                <i className="fas fa-sort-numeric-up me-1"></i>{" "}
                                Quantidade
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
                            <label
                                htmlFor="preco"
                                className="form-label fw-semibold"
                            >
                                <i className="fas fa-dollar-sign me-1"></i>{" "}
                                Preço
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
                            <label
                                htmlFor="marca"
                                className="form-label fw-semibold"
                            >
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
                            <label
                                htmlFor="categoria"
                                className="form-label fw-semibold"
                            >
                                <i className="fas fa-layer-group me-1"></i>{" "}
                                Categoria
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
                                <span
                                    className="text"
                                    onClick={
                                        alterar ? alterarProduto : handleSubmit
                                    }
                                >
                                    {alterar ? "Alterar" : "Gravar"}
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
