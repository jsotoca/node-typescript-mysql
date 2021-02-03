import Usuario from "../entities/usuario.entity";
import UsuarioRepository from "../repositories/usuario.repository";

export default class UsuarioService {

    public static async crearUsuario(usuario: Usuario) {
        return await UsuarioRepository.crearUsuario(usuario);
    }

}