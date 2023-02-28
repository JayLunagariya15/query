const mongoose = require('mongoose');
const tnx = require('../model/tnxSchema');
const user = require('../model/userSchema');

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
        type: mongoose.Schema.Types.ObjectId,
        ref : 'user',
        required : true,
    },

    to :{
        type: mongoose.Schema.Types.ObjectId,
        ref : 'user',
        required : true,
    },

    price : {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'tnx',
        required : true,
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