import UserRepository from "./user.repository";
import { _err } from "../helpers/error.helper";
import { comparePasswords } from "../helpers/password.helper";
import SignInDTO from "../interfaces/dtos/signin.interface";

export default class AuthRepository {

    public static async signIn(signInDTO: SignInDTO){
        const { email, password } = signInDTO;
        const foundUser = await  UserRepository.searchUser(null,email);
        if(!foundUser || foundUser == null) _err(401,`Email y/o contraseña incorrectas.`);
        if(!foundUser.estado) _err(403,`Usuario no verificado o dado de baja.`);
        if(!comparePasswords(password, foundUser.password)) _err(401,`Email y/o contraseña incorrectas!`);
        return foundUser;
    }

}