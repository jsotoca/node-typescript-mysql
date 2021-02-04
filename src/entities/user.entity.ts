import { comparePasswords } from "../helpers/password.helper";

export default class User {
    
    id_usuario: number;
    email: string;
    password: string;
    avatar: string;
    rol: string;
    estado: boolean;
    fecha_creacion: Date;
    fecha_edicion: Date;

    public constructor(id_usuario: number, email: string, password: string, avatar: string, rol: string, estado: boolean, fecha_creacion: Date, fecha_edicion: Date ){
        this.id_usuario = id_usuario;
        this.email = email;
        this.password = password;
        this.avatar = avatar;
        this.rol = rol;
        this.estado = estado;
        this.fecha_creacion = fecha_creacion;
        this.fecha_edicion = fecha_edicion;
    }

}