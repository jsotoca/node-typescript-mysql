import MySQL from "../database/mysql.database";
import User from "../entities/user.entity";
import ErrorTitles from "../enums/error-titles.enum";
import { _err } from "../helpers/error.helper";
import { comparePasswords } from "../helpers/password.helper";
import { generateToken } from "../helpers/token.helper";
import SignInDTO from "../interfaces/dtos/signin.interface";

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


    public static async signIn(signInDTO: SignInDTO){
        const { email, password } = signInDTO;
        const foundUser = await this.searchUser(null,email);
        if(!foundUser || foundUser == null) _err(401,`Email y/o contraseña incorrectas.`);
        if(!foundUser.estado) _err(403,`Usuario no verificado o dado de baja.`);
        if(!comparePasswords(password, foundUser.password)) _err(401,`Email y/o contraseña incorrectas!`);
        return foundUser;
    }

    public static async verifiedAccount(email: string, token: string){
        const foundUser = await this.searchUser(null, email);
        if(!foundUser) _err(401,`Email no registrado.`);
        if(foundUser.estado) _err(201,`Email ya verificado.`);
        return foundUser;
    }

    public static async searchUser(id: string, email: string){
        try {
            const data = await MySQL.doQuery(`
                SELECT * FROM usuario WHERE (id_usuario = ? OR id_usuario IS NULL) OR ( email = ? OR email IS NULL)
            `,[ id, email ]);
            return  data[0]? data[0] as User : null;
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

    public static async updatedStatus(status: boolean){
        try {
            await MySQL.doQuery(`
                UPDATE usuario SET estado = ?
            `,[ status ]);
        } catch (error) {
            _err(500, error.message, ErrorTitles.ERROR_DATABASE);
        }
    }

}