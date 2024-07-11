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
    const { q: searchTerm } = req.query;

    try {
        // Check if the search term is valid
        if (searchTerm && !/^[a-zA-Z0-9]+$/.test(searchTerm)) {
            const error = createHttpError(400, 'Invalid query');
            return next(error);
        }

        // Build the query based on the search term
        const query = searchTerm
            ? {
                  $or: [
                      {
                          $expr: {
                              $regexMatch: {
                                  input: {
                                      $concat: ['$firstName', ' ', '$lastName'],
                                  },
                                  regex: searchTerm,
                                  options: 'i',
                              },
                          },
                      },
                      { email: { $regex: searchTerm, $options: 'i' } },
                  ],
              }
            : {};

        // Find users based on the query and sort them by _id in descending order
        const users = await userModal.find(query).sort({ _id: -1 });

        return res.status(200).json({ data: users });
    } catch (error) {
        return next(error);
    }
};

export { createUser, getAllUsers };
