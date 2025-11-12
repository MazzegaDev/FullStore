import jwt from "jsonwebtoken";
import UsuarioRepository from "../repositories/usuarioRepository.js";
const SECRET = "BL2CKM3TALRUL3S"


export default class AuthMiddleware{
    gerarToken(id, nome, email, saldo, perfil){
        const JWT = jwt.sign({
            id,
            nome,
            email,
            saldo,
            perfil
        },SECRET,{
            expiresIn: 5000
        })

        return JWT;
    }


    async validarToken(req, res, next){
        if(req.cookies.token){
            let token = req.cookies.token;
            try {
                let payload = jwt.verify(token, SECRET);
                let usuRepo = new UsuarioRepository();
                let usuarioEncontrado = await usuRepo.buscarId(payload.id);
                if(usuarioEncontrado){
                    req.UsuarioLogado = usuarioEncontrado.usu_id;
                    next();
                }else{
                    return res.status(401).json({msg: "Usario não encontrado."})
                }
            } catch (error) {
                console.log(error)
                return res.status(401).json({msg: "Token invalido."});
            }
        }
    }
}