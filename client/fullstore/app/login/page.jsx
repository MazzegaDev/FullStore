"use client";

import { apiClient } from "@/utils/apiClient";
import { useRouter,  } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Link from "next/link";

export default function PageLogin() {
    const emailR = useRef("");
    const senhaR = useRef("");
    const router = useRouter();


    async function validarLogin() {
        const email = emailR.current.value;
        const senha = senhaR.current.value;

        if (!email && !senha) {
            // toast.error("Preencha corretamente os campos");
        }

        let obj = { email, senha };

        try {
            const response = await apiClient.post("/auth/", obj);
            if (response) {
                //console.log(response.usuario)
                if (response.usuario.per_id.per_adm == 1) {
                    router.replace("/admin");
                } else {
                    router.replace("/user");
                }
            }
        } catch (error) {
            console.log(error);
            toast.error("Não foi possivel processar a requisição");
        }
    }

    return (
        <div>
            <Toaster></Toaster>
            <h1>login</h1>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" ref={emailR} />
            </div>
            <div>
                <label htmlFor="senha">Senha</label>
                <input type="password" name="senha" id="senha" ref={senhaR} />
            </div>
            <div>
                <button onClick={validarLogin}>Entrar</button>
            </div>
            <div>
                <Link href={"/"}>
                        voltar
                </Link>
            </div>
        </div>
    );
}
