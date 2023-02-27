const express = require('express');
const Router = express.Router();
const userController = require('../controllers/userController');
const carController = require('../controllers/carController');
const tnxController = require('../controllers/tnxController');
const eventController = require('../controllers/eventController');
const user = require('../model/userSchema');
const tnx = require('../model/tnxSchema');


// Router.post('/Register', userController.users);
// Router.get('/Find', userController.fOne);
// Router.get('/GetAll', userController.gAll);
// Router.get('/:name', userController.getUser);

// Router.post('/List', userController.listing);
// Router.post('/Set', userController.setFunction);
// Router.post('/Match', userController.matchFunction);
// Router.post('/Push', userController.pushFunction);
// Router.post('/Equal',userController.equalFunction);
// Router.post('/Less', userController.lte);
// Router.post('/Greater', userController.gte);
// Router.post('/Each', userController.each);  

Router.post('/userOne', userController.userinOne);
Router.post('/userMany', userController.userinMany);
Router.post('/userUpdateOne',userController.userUpdateOne);
Router.post('/userUpdateMany', userController.userUpdateMany);
Router.post('/uniInsert', userController.uniInsert);

Router.post('/carOne',  carController.inOne);
Router.post('/carMany', carController.inMany);  
Router.post('/deleteOne', carController.deleteOne);
Router.post('/deleteMany', carController.deleteMany);

Router.post('/tnxOne', tnxController.inTnx);
Router.get('/find',tnxController.find);
Router.get('/findOne', tnxController.findOne);

Router.post('/eveOne', eventController.eveInsert);
Router.get('/findById', eventController.findbyID);
Router.post('/findAndModify', eventController.Modify);

module.exports = Router;