import { Router } from 'express';
import { signIn } from '../controllers/auth.controller';
import { signInValidate } from '../middlewares/validators/signin.validator';
import { validationResults } from '../middlewares/validators/Validationresults.validator';

const authRouter = Router();

authRouter.post('/signin',signInValidate,validationResults,signIn);

export default authRouter;