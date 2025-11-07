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
            categoriaAlter: {
                id: 2,
                nome: "novo nome",
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
                adm: true,
                desc: "gerente da loja",
            },
            perfilAlter: {
                id: 1,
                adm: false,
                desc: "Funcionario",
            },
            usuario: {
                nome: "Eduardo",
                email: "edu@gmail.com",
                senha: "senhasenha123",
                saldo: 1000,
                idP: {
                    per_id: 4
                }
            },
            usuarioAlter: {
                id: 2,
                nome: "Eduardo",
                email: "edu@gmail.com",
                senha: "senhasenha123",
                idP: {
                    per_id: 1
                }
            },
            manipularSaldo: {
                id: 1,
                saldo: 3000,
            },
        },
    },
};
const routes = ["./server.js"];
const outputJson = "./swaggerOutput.json";
swaggerAutogen({ openapi: "3.0.0" })(outputJson, routes, doc).then(async () => {
    await import("./server.js");
});
