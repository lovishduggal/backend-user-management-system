import express from 'express';
const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to Backend of User Management System!');
});

export default app;
