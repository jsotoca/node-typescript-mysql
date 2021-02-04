import { Request, Response } from 'express';
import Usuario from '../entities/user.entity';
import { encryptPassword } from '../helpers/password.helper';
import { _error_response, _response } from '../helpers/response.helper';
import SignInDTO from '../interfaces/dtos/signin.interface';
import UserService from '../services/user.service';

export const createUser = async (req:Request, res: Response) => {
        const tempUser = req.body as Usuario;
        const avatar = req.file;
        tempUser.password = encryptPassword(tempUser.password);
        try {
                const data = await UserService.createUser(tempUser, avatar);
                _response(res, 201, data);
        } catch (error) {
                _error_response(res,500,error);                
        }
}

export const signIn = async(req: Request, res: Response) => {
        const signInDTO = req.body as SignInDTO;
        try {
                const data = await UserService.signIn(signInDTO);
                _response(res,201,data);
        } catch (error) {
                _error_response(res, error.status || 500, error);
        }
}

export const verifiedAccount = async(req: Request, res: Response) => {
        const { email, token } = req.params;
        try {
            await UserService.verifiedAccount(email, token);
            _response(res,201,{ message: 'cuenta verificada.'});
        } catch (error) {
            _error_response(res, error.status || 500, error);
        }
}

export const forgotPassword = async(req: Request, res: Response) => {
        const { email } = req.params;
        try {
            await UserService.forgotPassword(email);
            _response(res,201,{ message: 'Se envio el email de recuperar contraseña con exito.'});
        } catch (error) {
            _error_response(res, error.status || 500, error);
        }
}