const mongoose = require('mongoose');
const car = require('../model/carSchema');
const user = require('../model/userSchema')

const tnxSchema = mongoose.Schema({

    // car : {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref : 'car',
    // },

    from : {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'user',
        required : true,
    },

    to :{
        type: mongoose.Schema.Types.ObjectId,
        ref : 'user',
        required : true,
    },

    price :{
        type: Number,
        required:true
    }
    
},{timestamps: true});

const tnx = mongoose.model('tnx', tnxSchema);
module.exports = tnx