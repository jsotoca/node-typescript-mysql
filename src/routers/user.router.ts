import { Router } from 'express';
import { createUser, forgotPassword, resetPassword, signIn, verifiedAccount } from '../controllers/user.controller';
import { uploadSingle } from '../helpers/upload.helper';
import { confirmationValidator } from '../middlewares/validators/confirmation.validator';
import { CreateUserValidator } from '../middlewares/validators/create-user.validator';
import { forgotPasswordValidator } from '../middlewares/validators/forgot-password.validator';
import { resetPasswordValidate } from '../middlewares/validators/reset-password.validator';
import { signInValidate } from '../middlewares/validators/signin.validator';
import { validationResults } from '../middlewares/validators/Validationresults.validator';

const userRouter = Router();

userRouter.post('/', uploadSingle('avatar'), CreateUserValidator, validationResults, createUser);
userRouter.post('/login', signInValidate, validationResults, signIn);
userRouter.get('/confirmation/:email/:token', confirmationValidator, validationResults, verifiedAccount);
userRouter.get('/forgot-password/:email',forgotPasswordValidator, validationResults, forgotPassword);
userRouter.post('/reset-password/:email/:token',resetPasswordValidate, validationResults, resetPassword);

export default userRouter;