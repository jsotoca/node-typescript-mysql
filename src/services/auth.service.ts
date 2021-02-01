import SignInDTO from "../interfaces/dtos/signin.interface";
import SignUpDTO from "../interfaces/dtos/signup.interface";
import AuthRepository from "../repositories/auth.repository";
import MailerService from "./mailer.service";

export default class AuthService {

    public static async signUp(signUpDTO:SignUpDTO){
        const data = await AuthRepository.signUp(signUpDTO);
        MailerService.sendEmailConfirmation(data.user);
        return data;
    }

    public static async signIn(signInDTO:SignInDTO){
        return await AuthRepository.signIn(signInDTO);
    }

}