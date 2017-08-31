const _ = require('lodash');
const fs = require('fs');
require('../models/foodItem.model');
const mongoose = require('mongoose');
// var foodItemModel = require('../../app/models/foodItems.json');

var foodItemModel = mongoose.model('FoodItem');

module.exports = {
    getFoodItemByName: getFoodItemByName,
    getFoodItemByProducer: getFoodItemByProducer,
    findAllFoodItem: findAllFoodItem,
    addFoodItem: addFoodItem,
    deleteFoodItem: deleteFoodItem,
    getFoodItemByNameAndProducer: getFoodItemByNameAndProducer
}

function getFoodItemByName(name, callback) {
    foodItemModel.find({name:name}, function(err,foods){
        if(err){
            console.error(err);
        }
        callback(null,foods);
    });
    
}

function getFoodItemByProducer(producer, callback) {
     foodItemModel.find({producer:producer}, function(err,foods){
        if(err){
            console.error(err);
        }
        callback(null,foods);
    });
}

function getFoodItemByNameAndProducer(name, producer,callback){
     foodItemModel.find({$and:[{name:name},{producer,producer}]}, function(err,foods){
        if(err){
            console.error(err);
        }
        callback(null,foods);
    });
}

/// get all food
function findAllFoodItem(callback) {

    foodItemModel.find({}, function(err, foods){
        if(err) {
            console.error(err);
        }
        callback(null, foods);
    })
}

/// add foodItem
function addFoodItem(foodItem, callback) {
    if (foodItem == null) {
        callback("Error!", null);
    }
    let fi = new foodItemModel(foodItem);
    fi.save(function(err, doc){
        if(err) return console.error(err);
        else callback(null, "success add foodItem");
    });
}

/// delete foodItem
function deleteFoodItem(id, callback) {
    if (id == null) {
        callback("Error!", null);
    }

    foodItemModel.remove(
        {itemId:id},
        function(err){
            if(err) return console.error(err);
            else callback(null, "success delete foodItem");
        }
    )

}