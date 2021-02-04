import express from 'express';
import authRouter from './auth.router';
import userRouter from './user.router';

const routers = express();

routers.use('/auth',authRouter);
routers.use('/user',userRouter);

export default routers;