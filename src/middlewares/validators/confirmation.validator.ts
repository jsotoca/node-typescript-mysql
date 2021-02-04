import { param } from 'express-validator';

export const confirmationValidator = [
    param('email','El email es necesario.').exists().isString().isEmail(),
    param('token','El token es necesario.').exists().isString(),
];