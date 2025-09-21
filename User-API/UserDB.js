const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const MongoDB = async()=>{
    try{
        await mongoose.connect(process.env.MongoURI);
        console.log("MongoDB connected Successfully");
    }
    catch(error){
        console.log(error);
        process.exit(1);
    }
}
module.exports = MongoDB;