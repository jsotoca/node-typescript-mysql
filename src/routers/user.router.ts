import { Router } from 'express';
import { createUser, forgotPassword, resetPassword } from '../controllers/user.controller';
import { uploadSingle } from '../helpers/upload.helper';
import { CreateUserValidator } from '../middlewares/validators/create-user.validator';
import { forgotPasswordValidator } from '../middlewares/validators/forgot-password.validator';
import { resetPasswordValidate } from '../middlewares/validators/reset-password.validator';
import { validationResults } from '../middlewares/validators/Validationresults.validator';

const userRouter = Router();

userRouter.post('/', uploadSingle('avatar'), CreateUserValidator, validationResults, createUser);
userRouter.get('/forgot-password/:email',forgotPasswordValidator, validationResults, forgotPassword);
userRouter.post('/reset-password/:email/:token',resetPasswordValidate, validationResults, resetPassword);

export default userRouter;