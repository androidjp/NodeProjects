/// foodItem mongoDB Operator
const uuid = require('uuid/v4');
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var FoodItemSchema = Schema({

    name: String,
    price: Number,
    curreny: String,
    producer: String,
    bestBefore: String,
    amount: Number,
    createDatetime: Date,
    updateDatetime: Date,
    itemId: String
},{
	collection: 'foodItems'
});
///index


FoodItemSchema.pre('update', function(){
	this.update({}, {$set:{updateDatetime:new Date()}});
});

FoodItemSchema.pre('save', function(next){
	var foodItem = this;
	foodItem.createDatetime = new Date();
	foodItem.updateDatetime = new Date();
	foodItem.itemId = uuid();
	next();
});

mongoose.model('FoodItem', FoodItemSchema);

