import { Request, Response } from 'express';
import Usuario from '../entities/user.entity';
import { encryptPassword } from '../helpers/password.helper';
import { _error_response, _response } from '../helpers/response.helper';
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