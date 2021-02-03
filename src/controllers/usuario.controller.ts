import { Request, Response } from 'express';
import Usuario from '../entities/usuario.entity';
import { encryptPassword } from '../helpers/password.helper';
import { _error_response, _response } from '../helpers/response.helper';
import UsuarioService from '../services/usuario.service';

export const crearUsuario = async (req:Request, res: Response) => {
        const usuario = req.body as Usuario;
        usuario.password = encryptPassword(usuario.password);
        try {
                const data = await UsuarioService.crearUsuario(usuario);
                _response(res, 201, data);
        } catch (error) {
                _error_response(res,500,error);                
        }
}