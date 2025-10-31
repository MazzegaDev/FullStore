import Usuario from "../entities/usuario.js";
import Perfil from "../entities/perfil.js";
import dataBase from "../db/dataBase.js";

export default class UsuarioRepository {
    #banco;
    constructor() {
        this.#banco = new dataBase();
    }

    async cadastrar(usuario) {
        const sql =
            "insert into tb_usuario (usu_nome, usu_email, usu_senha, usu_saldo, per_id) values (?, ?, ?, ?, ?)";
        const values = [
            usuario.usu_nome,
            usuario.usu_email,
            usuario.usu_senha,
            usuario.usu_saldo,
            usuario.per_id.per_id,
        ];

        const result = await this.#banco.ExecutaComandoNonQuery(sql, values);

        return result;
    }

    async listar() {
        const sql =
            "select * from tb_usuario U inner join tb_perfil P on U.per_id = P.per_id order by usu_saldo";
        let usuario = [];

        const rows = await this.#banco.ExecutaComando(sql);

        for (let i = 0; i < rows.length; i++) {
            const row = rows[i];

            usuario.push(this.toMap(row));
        }
        return usuario;
    }

    async buscarId(id) {
        const sql =
            "select * from tb_usuario U inner join tb_perfil P on U.per_id = P.per_id where usu_id = ?";
        const values = [id];

        const rows = await this.#banco.ExecutaComando(sql, values);
        if (rows.length > 0) {
            const row = rows[0];
            let usuario = this.toMap(row);

            return usuario;
        }

        return null;
    }

    async alterar(usuario) {
        const sql =
            "update tb_usuario set  usu_nome = ?, usu_email = ?, usu_senha = ?, per_id = ? where usu_id = ?";
        const values = [
            usuario.usu_nome,
            usuario.usu_email,
            usuario.usu_senha,
            usuario.per_id.per_id,
            usuario.usu_id,
        ];

        const result = await this.#banco.ExecutaComandoNonQuery(sql, values);
        return result;
    }

    async manipularSaldo(saldo, id) {
        const sql = "update tb_usuario set usu_saldo = ? where usu_id = ?";
        const values = [saldo, id];

        const result = await this.#banco.ExecutaComandoNonQuery(sql, values);

        return result;
    }

    async buscarSaldo(id) {
        const sql = "select usu_saldo from tb_usuario where usu_id = ?";
        const values = [id];

        const rows = await this.#banco.ExecutaComando(sql, values);

        if (rows.length > 0) {
            const row = rows[0];
            let saldo = new Usuario();
            saldo.usu_nome = row["usu_nome"];
            saldo.usu_saldo = row["usu_saldo"];

            return saldo;
        }
        return null;
    }

    async procurarPerfil(id) {
        const sql = "select * from tb_perfil where per_id = ?";
        const values = [id];

        const rows = await this.#banco.ExecutaComando(sql, values);

        if (rows.length > 0) {
            return true;
        }
        return null;
    }

    async deletar(id) {
        const sql = "delete from tb_usuario where usu_id = ?";
        const values = [id];

        const result = await this.#banco.ExecutaComandoNonQuery(sql, values);

        return result;
    }

    toMap(row) {
        let usuario = new Usuario();

        usuario.usu_id = row["usu_id"];
        usuario.usu_nome = row["usu_nome"];
        usuario.usu_email = row["usu_email"];
        usuario.usu_saldo = row["usu_saldo"];

        usuario.per_id = new Perfil();
        usuario.per_id.per_id = row["per_id"];
        usuario.per_id.per_desc = row["per_desc"];

        return usuario;
    }
}
