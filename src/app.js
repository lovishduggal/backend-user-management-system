import express from 'express';
import globalErrorHandler from './middlewares/globalErrorHandler.js';
const app = express();

app.get('/', (req, res) => {
    return res.send('<h1>Welcome to Backend of User Management System!</h1>');
});

// Global Error Handler
app.use(globalErrorHandler);
export default app;
