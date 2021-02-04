import AuthService from '../services/auth.service';
import { Request, Response } from 'express';
import { _error_response, _response } from "../helpers/response.helper";
import SignInDTO from '../interfaces/dtos/signin.interface';
import AuthRepository from '../repositories/auth.repository';
import { encryptPassword } from '../helpers/password.helper';

export const signIn = async(req: Request, res: Response) => {
    const signInDTO = req.body as SignInDTO;
    try {
            const data = await AuthService.signIn(signInDTO);
            _response(res,201,data);
    } catch (error) {
            _error_response(res, error.status || 500, error);
    }
}

export const verifiedAccount = async(req: Request, res: Response) => {
        const { email, token } = req.params;
        try {
            await AuthService.verifiedAccount(email, token);
            _response(res,201,{ message: 'cuenta verificada.'});
        } catch (error) {
            _error_response(res, error.status || 500, error);
        }
}

export const forgotPassword = async(req: Request, res: Response) => {
    const { email } = req.params;
    try {
        await AuthService.forgotPassword(email);
        _response(res,201,{ message: 'Se envio el email de recuperar contraseña con exito.'});
    } catch (error) {
        _error_response(res, error.status || 500, error);
    }
}

export const resetPassword = async(req: Request, res: Response) => {
    const { email, token } = req.params;
    let { password } = req.body;
    password = encryptPassword(password);
    try {
        await AuthService.resetPassword(email, token, password);
        _response(res,201,{ message: 'La contraseña se actualizo con exito.'});
    } catch (error) {
        _error_response(res, error.status || 500, error);
    }
}