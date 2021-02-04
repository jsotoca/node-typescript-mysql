import User from "../entities/user.entity";
import { _err } from "../helpers/error.helper";
import { generateToken } from "../helpers/token.helper";
import UserRepository from "../repositories/user.repository";
import MailerService from "./mailer.service";

export default class UserService {

    public static async createUser(user: User) {
        try {
            const newUser = await UserRepository.createUser(user);
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

}