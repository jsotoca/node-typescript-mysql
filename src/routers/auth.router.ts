import { Router } from 'express';
import { forgotPassword, resetPassword, signIn, verifiedAccount } from '../controllers/auth.controller';
import { confirmationValidator } from '../middlewares/validators/confirmation.validator';
import { forgotPasswordValidator } from '../middlewares/validators/forgot-password.validator';
import { resetPasswordValidate } from '../middlewares/validators/reset-password.validator';
import { signInValidate } from '../middlewares/validators/signin.validator';
import { validationResults } from '../middlewares/validators/Validationresults.validator';

const authRouter = Router();

authRouter.post('/signin',signInValidate,validationResults,signIn);
authRouter.get('/confirmation/:email/:token', confirmationValidator, validationResults, verifiedAccount);
authRouter.get('/forgot-password/:email',forgotPasswordValidator, validationResults, forgotPassword);
authRouter.post('/reset-password/:email/:token',resetPasswordValidate, validationResults, resetPassword);

export default authRouter;