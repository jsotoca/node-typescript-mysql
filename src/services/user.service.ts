import User from "../entities/user.entity";
import { _err } from "../helpers/error.helper";
import { generateToken } from "../helpers/token.helper";
import SignInDTO from "../interfaces/dtos/signin.interface";
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
            return {
                foundUser,
                token
            };
        } catch (error) {
            _err(error.status,error.message);
        }
    }

}