import { Config } from '../config/index.js';

/**
 * Global error handler middleware for handling errors in the application.
 *
 * @param {Object} err - The error object.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - The response object with the error status and message.
 */
const globalErrorHandler = (err, req, res) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        message,
        stack: Config.env === 'development' ? err.stack : null,
    });
};

export default globalErrorHandler;
