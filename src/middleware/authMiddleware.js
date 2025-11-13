import jwt from "jsonwebtoken";
import UsuarioRepository from "../repositories/usuarioRepository.js";
const SECRET = "BL2CKM3TALRUL3S";

export default class AuthMiddleware {


    gerarToken(id, nome, email, saldo, perfil) {
        const JWT = jwt.sign(
            {
                id,
                nome,
                email,
                saldo,
                perfil,
            },
            SECRET,
            {
                expiresIn: 5000,
            }
        );

        return JWT;
    }

    async validarToken(req, res, next) {

        if (!req.cookies.token_ADM && !req.cookies.token_USER) {
            return res.status(401).json({ msg: "Token não encontrado." });
        }
        let token = req.cookies.token_ADM || req.cookies.token_USER;
        try {
            let payload = jwt.verify(token, SECRET);
            let usuRepo = new UsuarioRepository()
            let usuarioEncontrado = await usuRepo.buscarId(payload.id);
            if (!usuarioEncontrado) {
                return res.status(401).json({ msg: "Usuario não encontrado." });
            }

            //validar apenas para adms
            let usuarioComAcesso = await usuRepo.verificarPermisao(
                payload.id
            );

            if (!usuarioComAcesso) {
                return res.status(403).json({
                    msg: "Esse usuario não tem permissão para acessar.",
                });
            }
            req.UsuarioLogado = usuarioEncontrado;
            next();

        } catch (error) {
            console.log(error);
            return res.status(401).json({ msg: "Token invalido." });
        }
    }
    async validarTokerUser(req, res, next){
        if (!req.cookies.token_ADM && !req.cookies.token_USER) {
            return res.status(401).json({ msg: "Token não encontrado." });
        }
        let token = req.cookies.token_ADM || req.cookies.token_USER;
        try {
            let payload = jwt.verify(token, SECRET);
            let usuRepo = new UsuarioRepository();
            let usuarioEncontrado = await usuRepo.buscarId(payload.id);
            if(!usuarioEncontrado){
                return res.status(401).json({msg: "Usuario não encontrado"});
            }
            req.UsuarioLogado = usuarioEncontrado;
            next();

        } catch (error) {
            console.log(error);
            return res.status(401).json({msg: "Token invalido"})
        }
    }

}
