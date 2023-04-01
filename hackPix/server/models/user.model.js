import mongoose from 'mongoose';

const User = mongoose.model(
    'User',
    {
        username: String,
        robotLevel:Number,
        cluodLevel:Number,
        rainbowLevel:Number
    }
);

export default User;