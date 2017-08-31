const express = require('express');
const userInfo = require('../../app/controllers/userInfo.server.controller.js');

module.exports = (app) => {
    const router = express.Router();
    

  	router.route('/addUserInfo')
  		.post(userInfo.addUserInfo);

  	router.route('/findUserById/:id')
  		.get(userInfo.findUserById);

    app.use('/userInfo', router);
};