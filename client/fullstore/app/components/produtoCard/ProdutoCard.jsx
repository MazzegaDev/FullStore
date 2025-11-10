"use client";

import "./styleP.css";

export default function ProdutoCard({ id, nome, marca, preco }) {
    
    
    function adicionarCarrinho(id){
        alert("fui clicaco meu id, " + id.prod_id)
    }
    
    

    return (
        <div className="produto">
            <span>{id}</span>
            <h1 className="nome">{nome}</h1>
            <ul className="lista">
                <li>{preco}</li>
                <li>{marca}</li>
            </ul>

            <button className="btnC" onClick={(id) => adicionarCarrinho(id)}>
                <span>
                    <i className="fas fa-shopping-cart"></i>
                </span>
            </button>
        </div>
    );
}
