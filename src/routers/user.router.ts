import { Router } from 'express';
import { createUser, forgotPassword, resetPassword, signIn, verifiedAccount } from '../controllers/user.controller';
import { uploadSingle } from '../helpers/upload.helper';
import { CreateUserValidator } from '../middlewares/validators/create-user.validator';
import { signInValidate } from '../middlewares/validators/signin.validator';
import { validationResults } from '../middlewares/validators/Validationresults.validator';

const userRouter = Router();

userRouter.post('/', uploadSingle('avatar'), CreateUserValidator, validationResults, createUser);
userRouter.post('/login', signInValidate, validationResults, signIn);
userRouter.get('/confirmation/:email/:token', verifiedAccount);
userRouter.get('/forgot-password/:email', forgotPassword);
userRouter.post('/reset-password/:email/:token', resetPassword);

export default userRouter;