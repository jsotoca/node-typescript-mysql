import { body } from 'express-validator';

export const CreateUserValidator = [
    body('email','El email es requerido').isString().isEmail().exists(),
    body('password','La Contraseña es requerida').isString().exists()
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/, "i")
    .withMessage('La contraseña debe contener al menos una mayúscula, una minúscula, un número y un caracter especial (d@$!%*?&).'),
];