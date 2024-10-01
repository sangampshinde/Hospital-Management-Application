const mongoose = require('mongoose');



const database = async () => {
    try {
        await mongoose.connect(process.env.DB);
        console.log('MongoDB database connection established successfully');
        
    } catch (error) {
        console.log("Database Connection error: " + error);
        
    }

}

module.exports = database;
