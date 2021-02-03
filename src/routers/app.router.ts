import express from 'express';
import authRouter from './auth.router';
import usuarioRouter from './usuario.router';

const routers = express();

routers.use('/auth',authRouter);
routers.use('/usuario',usuarioRouter);

export default routers;