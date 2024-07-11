/* eslint-disable no-console */
import mongoose from 'mongoose';
import { Config } from './index.js';
const connectDB = async () => {
    try {
        mongoose.connection.on('connected', () => {
            console.log('Connected to database successfully');
        });

        mongoose.connection.on('error', (err) => {
            console.log('Error in connecting to database.', err);
        });

        await mongoose.connect(Config.dbUrl);
    } catch (err) {
        console.error('Failed to connect to database.', err);
    }
};

export default connectDB;
