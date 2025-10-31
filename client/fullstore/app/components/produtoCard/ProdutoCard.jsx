"use client";

import "./styleP.css";

export default function ProdutoCard({ nome, marca, preco }) {
    return (
        <div className="produto">
            <h1 className="nome">{nome}</h1>
            <ul className="lista">
                <li>{preco}</li>
                <li>{marca}</li>
            </ul>
            <div>
                <i className="fas fa-users me-2"></i>
            </div>
        </div>
    );
}
