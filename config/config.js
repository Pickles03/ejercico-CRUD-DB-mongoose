const mongoose = require('mongoose');
require('dotenv').config();

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('DB connected');
    } catch (error) {
        console.error(error);
        throw new Error('DB connection failed');
    }
};

module.exports = { dbConnection };