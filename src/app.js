import express from 'express';
import globalErrorHandler from './middlewares/globalErrorHandler.js';
import userRouter from './user/userRouter.js';
import cors from 'cors';
import { Config } from './config/index.js';
const app = express();

app.use(
    cors({
        origin: [Config.FRONTEND_URI],
        credentials: true,
    }),
);

app.use(express.json());

app.get('/', (req, res) => {
    return res.send('<h1>Welcome to Backend of User Management System!</h1>');
});

app.use('/api/user', userRouter);

// Global Error Handler
app.use(globalErrorHandler);
export default app;
