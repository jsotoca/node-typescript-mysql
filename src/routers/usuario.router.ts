import { Router } from 'express';
import { crearUsuario } from '../controllers/usuario.controller';

const usuarioRouter = Router();



usuarioRouter.post('/',crearUsuario);

export default usuarioRouter;