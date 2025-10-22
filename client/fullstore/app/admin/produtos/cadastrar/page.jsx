"use client";

import { useEffect, useRef, useState } from "react";
import "../../../../public/css/CadastroPage.css"; // CSS customizado para dropdowns
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";

export default function CadastroPage() {
    const [marcas, setMarcas] = useState([]);
    const [categorias, setCategorias] = useState([]);

    let nomeRef = useRef("");
    let quantRef = useRef("");
    let precoRef = useRef("");
    let marcaRef = useRef("");
    let categoriaRef = useRef("");

    async function handleSubmit(e) {
        //Previne que a pagina seja recarregada
        e.preventDefault();

        //Montando objeto
        let nome = nomeRef.current.value.trim();
        let quant = parseInt(quantRef.current.value);
        let preco = parseFloat(precoRef.current.value);
        let marca = { marc_id: parseInt(marcaRef.current.value) };
        let categoria = { cate_id: parseInt(categoriaRef.current.value) };
        const produto = {
            nome,
            quant,
            preco,
            marca,
            categoria,
        };
        if (
            nome &&
            quant &&
            preco &&
            marca &&
            marca.marc_id &&
            categoria &&
            categoria.cate_id
        ) {
            try {
                const response = await fetch("http://localhost:5000/produto/", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(produto),
                });
                const data = await response.json();

                //Le o tipo de status que nosso backend retornou
                if (response.status === 200) {
                   toast.success(data.msg);
                }
                if (response.status === 400) {
                    toast.error(data.msg);
                }
                if (response.status === 500) {
                    toast.error(data.msg);
                }
            } catch (error) {
                console.log(error);
                toast.error(data.msg)
            }
        } else {
            alert("Verique os dados");
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
        <div className="card shadow mb-4">
            <div><Toaster/></div>
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
                        <input
                            type="text"
                            className="form-control"
                            id="nome"
                            ref={nomeRef}
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
                            className="form-control"
                            id="quant"
                            ref={quantRef}
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
                            ref={precoRef}
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
                            <select id="marca" ref={marcaRef}>
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
                            <select id="categoria" ref={categoriaRef}>
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
                        <button
                            className="btn btn-primary shadow-sm"
                            onClick={handleSubmit}
                        >
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
