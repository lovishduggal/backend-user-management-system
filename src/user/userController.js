import createHttpError from 'http-errors';
import userModal from './userModal.js';

const createUser = async (req, res, next) => {
    const { firstName, lastName, email, gender, age } = req.body;

    // Check if all the required fields are present
    if (!firstName || !lastName || !email || !gender || !age) {
        const error = createHttpError(
            400,
            'Please provide all the required fields',
        );
        return next(error);
    }

    // Check if the email is unique
    try {
        const existingUser = await userModal.findOne({ email });
        if (existingUser) {
            const error = createHttpError(400, 'Email already exists');
            return next(error);
        }

        // Create the user
        const user = await userModal.create({
            firstName,
            lastName,
            email,
            gender,
            age,
        });
        return res.status(201).json({ data: user });
    } catch (error) {
        return next(error);
    }
};

const getAllUsers = async (req, res, next) => {
    try {
        const users = await userModal.find();
        return res.status(200).json({ data: users });
    } catch (error) {
        return next(error);
    }
};

export { createUser, getAllUsers };
