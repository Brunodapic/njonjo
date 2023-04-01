import mongoose from 'mongoose';

export const init = () => {   
    if (!process.env.MONGO_URL) {
        throw new Error('MONGO_URL environment variable not present');
    }

    mongoose.connect(process.env.MONGO_URL);
}