import { encryptPassword, comparePasswords } from "../helpers/password.helper";

export default class Usuario {
    
    email: string;
    password: string;
    avatar: string;
    rol: string;
    estado: boolean;
    fecha_creacion: Date;
    fecha_edicion: Date;

    public constructor(email: string, password: string, avatar: string, rol: string, estado: boolean, fecha_creacion: Date, fecha_edicion: Date ){
        this.email = email;
        this.password = password;
        this.avatar = avatar;
        this.rol = rol;
        this.estado = estado;
        this.fecha_creacion = fecha_creacion;
        this.fecha_edicion = fecha_edicion;
    }

    public comparePasswords(password: string): boolean {
        return comparePasswords(password, this.password);
    }
}