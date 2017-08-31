const _ = require('lodash');
// const uuid = require('uuid/v4');
const foodItemFacade = require('../../app/facade/foodItem.server.facade.js');
module.exports = {
    getFoodItemByName: getFoodItemByName,
    getFoodItemByProducer: getFoodItemByProducer,
    findAllFoodItem: findAllFoodItem,
    postFoodItemByName: postFoodItemByName,
    addFoodItem: addFoodItem,
    deleteFoodItem: deleteFoodItem,
    getFoodItemByNameAndProducer: getFoodItemByNameAndProducer
}

function getFoodItemByName(req, res, next) {
    let params = req.params;
    let name = params.name;
    if (_.isEmpty(name)) {
        return next(new Error('food name is empty'));
    } else {
        foodItemFacade.getFoodItemByName(name, (error, result) => {
            if (error) {
                return next(new Error(error));
            } else {
                //return res.json(result);
                res.render('foodItem', {'foodItemList':result});
            }
        });
    }
}

function getFoodItemByProducer(req, res, next) {
    let body = req.body;
    let producer = body.producer;
    if (_.isEmpty(producer)) {
        return next(new Error('producer name is empty'));
    } else {
        foodItemFacade.getFoodItemByProducer(producer, (error, result) => {
            if (error) {
                return next(new Error(error));
            } else {
                return res.json(result);
            }
        });
    }
}

/// name and producer  to find foodItem 
function getFoodItemByNameAndProducer(req, res, next) {
    let body = req.params;
    let producer = body.producer;
    let name = body.name;
    if (_.isEmpty(producer) || _.isEmpty(name)) {
        return next(new Error('producer name is empty'));
    } else {
        foodItemFacade.getFoodItemByNameAndProducer(name, producer, (error, result) => {
            if (error) {
                return next(new Error(error));
            } else {
                return res.json(result);
            }
        });
    }
}

////get all food 
function findAllFoodItem(req, res, next) {
    foodItemFacade.findAllFoodItem((error, result) => {
        if (error) {
            return next(new Error(error));
        } else {
            //return res.json(result);
            // res.locals.test = '123';
            res.render('foodItem', {'foodItemList':result});
            // return res.json(result);
        }
    });
}




/// post way to get FoodItem according to name
function postFoodItemByName(req, res, next) {
    let params = req.body;
    let name = params.name;
    if (_.isEmpty(name)) {
        return next(new Error('food name is empty'));
    } else {
        foodItemFacade.getFoodItemByName(name, (error, result) => {
            if (error) {
                return next(new Error(error));
            } else {
                return res.json(result);
                // res.render('foodItem', result);
            }
        });
    }
}

///add a foodItem
function addFoodItem(req, res, next) {
    let body = req.body;
    if (_.isEmpty(body)) {
        return next(new Error('nothing in request body'));
    } else {
        // body.itemId = uuid();
        foodItemFacade.addFoodItem(body, (error, result) => {
            if (error) {
                return next(new Error(error));
            } else {
                return res.json(result);
                // res.render('foodItem', result);
            }
        });
    }
}

///delete a foodItem
function deleteFoodItem(req, res, next) {
    let id = req.params.id;
    if (_.isEmpty(id)) {
        return next(new Error('nothing in request body'));
    } else {
       
        foodItemFacade.deleteFoodItem(id, (error, result) => {
            if (error) {
                return next(new Error(error));
            } else {
                return res.json(result);
                // res.render('foodItem', result);
            }
        });
    }
}