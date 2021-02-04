import { param } from 'express-validator';

export const forgotPasswordValidator = [
    param('email','El email es necesario.').exists().isString().isEmail().withMessage('Debe tener formato de email.')
];