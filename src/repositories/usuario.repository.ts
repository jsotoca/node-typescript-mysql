import MySQL from "../database/mysql.database";
import Usuario from "../entities/usuario.entity";
import ErrorTitles from "../enums/error-titles.enum";
import { _err } from "../helpers/error.helper";

export default class UsuarioRepository {

    public static async crearUsuario(usuario: Usuario){
        try {
            const data = await MySQL.doQuery(`
                INSERT INTO  usuario(email, password)
                VALUES (?, ?)
            `,[ usuario.email, usuario.password ]);
            return data;
        } catch (error) {
            _err(500, error.message, ErrorTitles.ERROR_DATABASE);
        }
    }

}