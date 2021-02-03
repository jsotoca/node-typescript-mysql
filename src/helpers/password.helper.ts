import { hashSync, compareSync } from 'bcrypt';

export const encryptPassword = (password: string): string => {
    return hashSync(password, 10);
}

export const comparePasswords = (password: string, encrypt: string): boolean => {
    return compareSync(password, encrypt);
}