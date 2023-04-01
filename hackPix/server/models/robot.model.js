import mongoose from 'mongoose';

const Robot = mongoose.model(
    'Robot',
    {
        name: String,
        type: Number
    }
);

export default Robot;