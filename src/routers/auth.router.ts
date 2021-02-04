import { Router } from 'express';
import { signIn, verifiedAccount } from '../controllers/auth.controller';
import { confirmationValidator } from '../middlewares/validators/confirmation.validator';
import { signInValidate } from '../middlewares/validators/signin.validator';
import { validationResults } from '../middlewares/validators/Validationresults.validator';

const authRouter = Router();

authRouter.post('/signin',signInValidate,validationResults,signIn);
authRouter.get('/confirmation/:email/:token', confirmationValidator, validationResults, verifiedAccount);

export default authRouter;