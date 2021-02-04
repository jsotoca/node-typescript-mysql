import { body, param } from 'express-validator';

export const resetPasswordValidate = [
    param('email','El email es necesario.').exists().isString().isEmail(),
    param('token','El token es necesario.').exists().isString(),
    body('password','La contraseña es requerida.').exists().isString()
];