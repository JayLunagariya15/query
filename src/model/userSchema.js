const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name  : {
        type: String,
        required:true,
        trim: true,
    },

    email: {
        type: String,
        required:true
    },

    phone: {
        type: Number,
        required:true
    }

}, {timestamps: true});

const user = mongoose.model('user', userSchema);
module.exports = user
