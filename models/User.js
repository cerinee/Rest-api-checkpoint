let mongoose = require("mongoose");
//create a schema for user
let userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,   
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        validate: {
            validator: function (v) {
                return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v);
            },

        }
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        }
});
//export the model
const User = mongoose.model("User", userSchema);
module.exports = User;
