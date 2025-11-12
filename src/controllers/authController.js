import AuthMiddleware from "../middleware/authMiddleware.js";
import UsuarioRepository from "../repositories/usuarioRepository.js";

export default class AuthController {
    #userRepo;
    constructor() {
        this.#userRepo = new UsuarioRepository();
    }

    async gerarToken(req, res) {
        try {
            let { email, senha } = req.body;
            if (email && senha) {
                let usuarioEncontrado = await this.#userRepo.validarAcesso(
                    email,
                    senha
                );

                if (!usuarioEncontrado) {
                    return res
                        .status(404)
                        .json({ msg: "Usuario não encontrado" });
                }

                let auth = new AuthMiddleware();

                let token = auth.gerarToken(
                    usuarioEncontrado.usu_id,
                    usuarioEncontrado.usu_nome,
                    usuarioEncontrado.usu_email,
                    usuarioEncontrado.usu_saldo,
                    usuarioEncontrado.per_id.per_id,
                    usuarioEncontrado.per_id.per_adm,
                );

                res.cookie("token", token, {
                    httpOnly: true,
                });

                return res
                    .status(200)
                    .json({ token: token, usuario: usuarioEncontrado });
            } else {
                return res
                    .status(400)
                    .json({ msg: "Informe um E-Mail e senha validos" });
            }
        } catch (error) {
            console.log(error);
            return res
                .status(500)
                .json({ msg: "Não foi possivel processar a requisição" });
        }
    }
}
