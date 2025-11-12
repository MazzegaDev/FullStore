import toast from "react-hot-toast";


export class ApiClient {

    static instance = null
    baseUrl = "http://localhost:5000"
    jwt = "";
    headers = {
        "Content-Type": "application/json"
    }

    constructor() {
        if(ApiClient.instance != null) {
            throw new Error("ApiClient já foi instanciado!!!")
        }
    }

    static getInstance() {
        if(ApiClient.instance == null) {
            ApiClient.instance = new ApiClient();
        }
        return ApiClient.instance;
    }

    static setJwt(jwt) {
        ApiClient.instance.jwt = jwt;
    }

    async get(endpoint) {
        const response = await fetch(this.baseUrl + endpoint, {
            method: "GET",
            credentials: "include",
            headers: this.headers,
        });

        return await this.checarResposta(response);
    }

    async post(endpoint, body) {
        const response = await fetch(this.baseUrl + endpoint, {
            method: "POST",
            headers: this.headers,
            credentials: "include",
            body: JSON.stringify(body)
        })

        return await this.checarResposta(response);
    }

    async put(endpoint, body) {
        const response = await fetch(this.baseUrl + endpoint, {
            method: "PUT",
            headers: this.headers,
            credentials: "include",
            body: JSON.stringify(body),
        });

        return await this.checarResposta(response);
    }

    async delete(endpoint) {
        const response = await fetch(this.baseUrl + endpoint, {
            method: "DELETE",
            credentials: "include",
            headers: this.headers,
        });

        return await this.checarResposta(response);
    }

    async patch(endpoint, body) {
        const response = await fetch(this.baseUrl + endpoint, {
            method: "PATCH",
            headers: this.headers,
            credentials: "include",
            body: JSON.stringify(body),
        });

        return await this.checarResposta(response);
    }

    async postFormData(endpoint, body) {
        const response = await fetch(this.baseUrl + endpoint, {
            method: "POST",
            credentials: "include",
            body: body,
        });

        return await this.checarResposta(response);
    }

    async checarResposta(response) {
        if(response.ok) {
            const json = await response.json();
            return json;
        }
        else{
            let resposta = await response.json();
            console.error(`Erro ao realizar requisição! HTTP Status: ${response.status}`)
            if(resposta.msg) {
                toast.error(resposta.msg);
            }
            else{
                toast.error(`Erro ao realizar requisição! HTTP Status: ${response.status}`);
            }
        }
    }
}

export const apiClient = ApiClient.getInstance();