const mongoose = require('mongoose');
const tnx = require('../model/tnxSchema')

const eventSchema = mongoose.Schema({
    created :{
        type: Boolean,
        default: false
    },

    sold: {
        type: Boolean,
        default:false
    },

    from: {
        type: String,
        required:true
    },

    to :{
        type: String,
        required:true
    },

    price : {

        type : String,
        required:true
    },

    qty: {
        type: Number,
    },

    status :{
        type: String,
        enum:['active','inactive']
    },

},{timestamps: true});

const event = mongoose.model('event', eventSchema);

module.exports = event