const  express =  require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const {Connection} = require('./config/db');
const Router = require('./router/router');


require("dotenv").config();

const PORT = 3000 || 8080 

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

//Router 
app.use('/', Router);

//Database
const username = process.env.DB_USERNAME
const password = process.env.DB_PASSWORD
Connection(username, password)

//listening
app.listen(8080, (req, res) => {
    console.log("Server is Listening on " + 8080 + " Port");
})
