import AuthRepository from "../repositories/auth.repository";
import UserRepository from "../repositories/user.repository";
import { _err } from "../helpers/error.helper";
import { decodeTemporalToken, generateToken } from "../helpers/token.helper";
import SignInDTO from "../interfaces/dtos/signin.interface";
import Payload from "../interfaces/payload.intertace";

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

    public static async verifiedAccount(email: string, token: string){
        try {
            const foundUser = await AuthRepository.verifiedAccount(email, token);
            const payload:Payload = await decodeTemporalToken(token, foundUser);
            if(email != payload.email) _err(403,`Email no coincide.`);
            await UserRepository.updatedStatus(true);
        } catch (error) {
            _err(error.status,error.message);
        }
    }

}