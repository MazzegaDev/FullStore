import express from "express";
import cors from 'cors';


import produtoRoute from "./routes/produtoRoute.js";



const server = express();
server.use(cors());


server.use("/produto", produtoRoute);

server.listen(5000, ()=>{
    console.log("http://localhost:5000/produto/");
})