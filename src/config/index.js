/* eslint-disable no-undef */
import { config } from 'dotenv';
config();

const { PORT, NODE_ENV, MONGO_CONNECTION_STRING, FRONTEND_URI } = process.env;

export const Config = {
    PORT,
    env: NODE_ENV,
    dbUrl: MONGO_CONNECTION_STRING,
    FRONTEND_URI,
};
