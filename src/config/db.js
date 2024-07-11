/* eslint-disable no-console */
import mongoose from 'mongoose';
import { Config } from './index.js';

/**
 * Asynchronously connects to the MongoDB database using Mongoose.
 * Sets up event listeners for connection success and error events.
 *
 * @async
 * @function connectDB
 * @returns {Promise<void>} Resolves when the connection is successfully established.
 * @throws Will throw an error if the connection fails.
 */
const connectDB = async () => {
    try {
        mongoose.connection.on('connected', () => {
            console.log('Connected to database successfully');
        });

        mongoose.connection.on('error', (err) => {
            console.log('Error in connecting to database.', err);
        });

        return await mongoose.connect(Config.dbUrl);
    } catch (err) {
        console.error('Failed to connect to database.', err);
    }
};

export default connectDB;
