import mongoose from "mongoose";


const connectDB = async (DB_URL) => {
    try {
        await mongoose.connect(DB_URL);
        console.log('MongoDB Connected SucessFully');
    } catch (error) {
        console.log('Database Connection Error:' ,error)
        process.exit(1);
    }
}