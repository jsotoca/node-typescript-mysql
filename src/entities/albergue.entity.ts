import Usuario from "./usuario.entity";

export default class Albergue {
    
    nombre: string;
    direccion: string;
    contacto: string;
    telefono: string;
    usuario: Usuario;

    public constructor(nombre: string, direccion: string, contacto: string, telefono: string, usuario: Usuario){
        this.nombre = nombre;
        this.direccion = direccion;
        this.contacto = contacto;
        this.telefono = telefono;
        this.usuario = usuario;
    }
  
}