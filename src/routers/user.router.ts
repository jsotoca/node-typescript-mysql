import { Router } from 'express';
import { createUser } from '../controllers/usuario.controller';

const userRouter = Router();

userRouter.post('/',createUser);

export default userRouter;