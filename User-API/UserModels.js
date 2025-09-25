const mongoose = require("mongoose");


const { Schema, model } = mongoose;

const userSchema = new Schema({
    Name: {
        type: String,
        required: true
    },
    Age: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum : ["admin", "user"],
        default: "user",
        required: true
    },
    password: {
        type: String,
        required: true
    }
});


const User = model("User", userSchema);

module.exports = User;
