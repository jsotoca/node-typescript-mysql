import User from "../entities/user.entity";
import { _err } from "../helpers/error.helper";
import { decodeTemporalToken, generateToken } from "../helpers/token.helper";
import SignInDTO from "../interfaces/dtos/signin.interface";
import Payload from "../interfaces/payload.intertace";
import UserRepository from "../repositories/user.repository";
import AWSS3 from "./aws-s3.service";
import MailerService from "./mailer.service";

export default class UserService {

    public static async createUser(user: User, avatar?: any) {
        try {
            let newUser = await UserRepository.createUser(user);
            if(newUser && avatar){
                let avatarUrl = await AWSS3.upload(avatar,'images/avatar');
                await UserRepository.updatedAvatar(avatarUrl);
                newUser.avatar = avatarUrl;
            }
            const token = generateToken({ 
                id_usuario: newUser.id_usuario, 
                email: newUser.email
            });
            MailerService.sendEmailConfirmation(newUser);
            delete newUser.password;
            return {
                newUser,
                token
            };
        } catch (error) {
            _err(error.status,error.message);
        }
    }

    public static async signIn(signInDTO:SignInDTO){
        try {
            const foundUser = await UserRepository.signIn(signInDTO);
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
            const foundUser = await UserRepository.verifiedAccount(email, token);
            const payload:Payload = await decodeTemporalToken(token, foundUser);
            if(email != payload.email) _err(403,`Email no coincide.`);
            await UserRepository.updatedStatus(true);
        } catch (error) {
            _err(error.status,error.message);
        }
    }

    public static async forgotPassword(email: string){
        try {
            const foundUser = await UserRepository.forgotPassword(email);
            MailerService.sendEmailResetPassword(foundUser);
        } catch (error) {
            _err(error.status,error.message);
        }
    }

    public static async resetPassword(email: string, token: string, password: string){
        try {
            const foundUser = await UserRepository.resetPassword(email, token, password);
            const payload:Payload = await decodeTemporalToken(token, foundUser);
            if(email != payload.email) _err(403, `Email no coincide.`);
            await UserRepository.updatedPassword(password);
        } catch (error) {
            _err(500,`Se produjo un error autentificando al usuario.`);
        }
    }


}