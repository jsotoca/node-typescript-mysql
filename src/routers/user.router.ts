import { Router } from 'express';
import { createUser } from '../controllers/user.controller';
import { uploadSingle } from '../helpers/upload.helper';
import { CreateUserValidator } from '../middlewares/validators/create-user.validator';
import { validationResults } from '../middlewares/validators/Validationresults.validator';

const userRouter = Router();

userRouter.post('/', uploadSingle('avatar'), CreateUserValidator, validationResults, createUser);

export default userRouter;