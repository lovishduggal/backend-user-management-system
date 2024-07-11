import express from 'express';
import { createUser, getAllUsers } from './userController.js';

const userRouter = express.Router();

// routes
userRouter.post('/register', createUser);
userRouter.get('/', getAllUsers);
export default userRouter;
