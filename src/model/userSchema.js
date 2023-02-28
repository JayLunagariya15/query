const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name  : {
        type: String,
        required:true,
        trim: true,
    },

    email: {
        type: String,
        required:true,
        unique:true
    },
    
    phone: {
        type: Number,
        required:true,
        unique: true
    }
}, {timestamps: true});

const user = mongoose.model('user', userSchema);
module.exports = user
