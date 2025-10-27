import swaggerAutogen from "swagger-autogen";

const doc = {
    host: "localhost:5000",
    info: {
        title: "API REST Loja",
        description: "API REST do backend de uma loja ficticia",
    },
    components: {
        schemas: {
            erro: {
                msg: "Ocorreu um erro",
            },
            produto: {
                nome: "RX 7600",
                quant: 2,
                preco: 1799,
                marca: {
                    marc_id: 1,
                },
                categoria: {
                    cate_id: 1,
                },
            },
            marca: {
                nome: "AMD",
            },
            categoria: {
                nome: "Eletronico",
            },
            produtoAlter: {
                id: 2,
                nome: "novo nome",
                quant: 2,
                preco: 1799,
                marca: {
                    marc_id: 1,
                },
                categoria: {
                    cate_id: 1,
                },
            },
            perfil: {
                per_adm: true,
                per_desc: "gerente da loja",
            },
            perfilAlter:{
                id: 1,
                adm: false,
                desc: "Funcionario",
            },
        },
    },
};
const routes = ["./server.js"];
const outputJson = "./swaggerOutput.json";
swaggerAutogen({ openapi: "3.0.0" })(outputJson, routes, doc).then(async () => {
    await import("./server.js");
});
