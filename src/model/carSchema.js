const mongoose = require('mongoose');
const user = require('../model/userSchema')

const carSchema = mongoose.Schema({
    // user: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref : 'user',
    // },
    
    owner : {
        type : String,
        required:true
    },

    model: {
        type: String,
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
