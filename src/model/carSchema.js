const mongoose = require('mongoose');
const user = require('../model/userSchema')

const carSchema = mongoose.Schema({

    owner : {
        type : String,
        required:true
    },

    model: {
        type: String,
        unique: true
    },

    color : {
        type : String,
    },

    type: {
        type: String,
        enum:['Sedan','Sport','Suv']
    },
},{timestamps: true});

const car = mongoose.model('car', carSchema);
module.exports = car
