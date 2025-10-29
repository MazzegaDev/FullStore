import express from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const outputJson = require("./swaggerOutput.json");

import produtoRoute from "./routes/produtoRoute.js";
import marcaRoute from "./routes/marcaRoute.js";
import categoriaRoute from "./routes/categoriaRoute.js";
import perfilRoute from "./routes/perfilRoute.js";
import usuarioRoute from "./routes/usuarioRoute.js";


const server = express();
server.use(cors());
server.use(express.json());

server.use("/docs", swaggerUi.serve, swaggerUi.setup(outputJson));
server.use("/produto", produtoRoute);
server.use("/marca", marcaRoute);
server.use("/categoria", categoriaRoute);
server.use("/perfil", perfilRoute);
server.use("/usuario", usuarioRoute);

server.listen(5000, () => {
    console.log("http://localhost:5000/docs/");
});
