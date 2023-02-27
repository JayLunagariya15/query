const mongoose = require('mongoose');
const Connection = (username, password) => {
    
    const URL = 'mongodb+srv://Jay:Jay%401501@index.mt1w46f.mongodb.net/?retryWrites=true&w=majority'

    try{
        mongoose.connect(URL , { useUnifiedTopology: true, useNewUrlParser: true});
        console.log("Database Connected Successfully");
    } catch (error){
        console.log("Error in Database Connection", error);
    }
}

module.exports = {Connection};
