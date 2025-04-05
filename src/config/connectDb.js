import mongoose from "mongoose";
export async function connectDb(){
    try {
        const connection = await mongoose.connect('mongodb+srv://yashpawar12122004:37pzeZyf4DsMaV83@procoders.6tbftgo.mongodb.net/?retryWrites=true&w=majority&appName=procoders');
        console.log(`MongoDB connected: ${connection.connection.host}`);

    } catch (error) {
        console.log('error in mongodb connection ', error);

        process.exit(1);

    }
}