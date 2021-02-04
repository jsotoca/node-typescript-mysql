import MySQL from "../database/mysql.database";
import User from "../entities/user.entity";
import ErrorTitles from "../enums/error-titles.enum";
import { _err } from "../helpers/error.helper";

export default class UserRepository {

    public static async createUser(user: User){
        try {
            const data = await MySQL.doQuery(`
                INSERT INTO  usuario(email, password)
                VALUES (?, ?)
            `,[ user.email, user.password ]);
            const id = data.insertId;
            const newUser = await this.searchUser(id,null);
            return newUser;
        } catch (error) {
            _err(500, error.message, ErrorTitles.ERROR_DATABASE);
        }
    }

    public static async searchUser(id: string, email: string){
        try {
            const data = await MySQL.doQuery(`
                SELECT * FROM usuario WHERE (id_usuario = ? OR id_usuario IS NULL) OR ( email = ? OR email IS NULL)
            `,[ id, email ]);
            return data[0] as User;
        } catch (error) {
            _err(500, error.message, ErrorTitles.ERROR_DATABASE);
        }
    }

    public static async updatedAvatar(avatar: string){
        try {
            await MySQL.doQuery(`
                UPDATE usuario SET avatar = ?
            `,[ avatar ]);
        } catch (error) {
            _err(500, error.message, ErrorTitles.ERROR_DATABASE);
        }
    }

}