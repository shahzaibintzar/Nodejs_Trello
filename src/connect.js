const mongoose = require('mongoose');

const connectToMongoDB = async (connectionString) => {
    try {
        await mongoose.connect(connectionString, {
            ssl: true,
            tlsInsecure: true
        });
        console.log("Connected to MongoDB successfully!");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};

module.exports = { connectToMongoDB };
