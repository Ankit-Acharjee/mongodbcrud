import mongoose from "mongoose";

const connectMongoDB = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_CRUD);
        console.log("Connected successfully")
    }
    catch(error){
        console.log(error)
    }
};

export default connectMongoDB;