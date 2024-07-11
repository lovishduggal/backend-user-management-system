import { config } from 'dotenv';
config();

// eslint-disable-next-line no-undef
const { PORT } = process.env;

export const Config = {
    PORT,
};
