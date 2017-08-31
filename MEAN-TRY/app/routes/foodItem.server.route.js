const express = require('express');
const foodItem = require('../../app/controllers/foodItem.server.controller.js');


module.exports = (app) => {
    const router = express.Router();
    router.route('/getFoodItemByName/:name')
    .get(foodItem.getFoodItemByName);

    router.route('/getFoodItemByProducer')
    .post(foodItem.getFoodItemByProducer);
  
  	router.route('/findAllFoodItem')
  		.get(foodItem.findAllFoodItem);

  	router.route('/postFoodItemByName')
  		.post(foodItem.postFoodItemByName);

  	router.route('/addFoodItem')
  		.post(foodItem.addFoodItem);

  	router.route('/deleteFoodItem/:id')
  		.delete(foodItem.deleteFoodItem);

	router.route('/getFoodItemByNameAndProducer/:name/:producer')
  		.get(foodItem.getFoodItemByNameAndProducer);

    app.use('/foodStore', router);
};