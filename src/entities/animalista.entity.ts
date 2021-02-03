import Usuario from "./usuario.entity";

export default class Animalista {
    
    nombres_completos: string;
    DNI: string;
    telefono: string;
    usuario: Usuario;

    public constructor(nombres_completos: string, DNI: string, telefono: string, usuario: Usuario){
        this.nombres_completos = nombres_completos;
        this.DNI = DNI;
        this.telefono = telefono;
        this.usuario = usuario;
    }
  
}