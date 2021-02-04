import { _err } from "../helpers/error.helper";
import { generateToken } from "../helpers/token.helper";
import SignInDTO from "../interfaces/dtos/signin.interface";
import AuthRepository from "../repositories/auth.repository";

export default class AuthService {

    public static async signIn(signInDTO:SignInDTO){
        try {
            const foundUser = await AuthRepository.signIn(signInDTO);
            const token = generateToken({ 
                id_usuario: foundUser.id_usuario, 
                email: foundUser.email
            });
            delete foundUser.password;
            return {
                foundUser,
                token
            };
        } catch (error) {
            _err(error.status,error.message);
        }
    }

}