import { sign, verify } from 'jsonwebtoken';
import enviroment from '../config/enviroment';
import Usuario from '../entities/user.entity';
import Payload from "../interfaces/payload.intertace";
import { _err } from './error.helper';

export const generateToken = (payload:Payload) => {
    try {
        return sign(payload,enviroment.TOKEN_SECRET,{ expiresIn: '4h'});
    } catch (error) {
        _err(500,'Error generando token');
    }
}

export const generateTemporalToken = (usuario:Usuario) => {
    const payload:Payload = { email: usuario.email };
    const secret = usuario.password + '-' + usuario.fecha_creacion;
    try {
        return sign(payload,secret,{ expiresIn: '1h'});
    } catch (error) {
        _err(500,'Error generando token');
    }
}

export const decodeToken = (token: string) => {
    return new Promise<Payload>((resolve, reject) => {
        verify(token, enviroment.TOKEN_SECRET, (err, payload) => {
            if(err){
                reject(err);
                return ;
            }
            else{
                resolve(payload as Payload);
            }
        });
    })
}


export const decodeTemporalToken = (token: string,usuario: Usuario) => {
    return new Promise<Payload>((resolve, reject) => {
        const secret = usuario.password + '-' + usuario.fecha_creacion;
        verify(token, secret, (err, payload) => {
            if(err){
                reject(err);
                return ;
            }
            else{
                resolve(payload as Payload);
            }
        });
    });
}