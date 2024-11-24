const mongoose = require('mongoose')

const connectDb = async()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log("MongoDB connected");
    }catch(err){
        console.log("Error in connecting to Database");
    }
};

module.exports = connectDb;