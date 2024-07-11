/* eslint-disable no-undef */
/* eslint-disable no-console */
import app from './app.js';
import connectDB from './config/db.js';
import { Config } from './config/index.js';

const startServer = async () => {
    const port = Config.PORT;

    try {
        await connectDB();
        app.listen(port, () => console.log(`Listening on port: ${port}`));
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};

startServer();
