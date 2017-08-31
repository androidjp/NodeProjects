const _ = require('lodash');
const fs = require('fs');
var userInfoModel = require('../../app/models/userInfo.json');

module.exports = {
	addUserInfo : addUserInfo,
	findUserById : findUserById
}

///add userInfo
function addUserInfo(userInfo,callback){
	if(userInfo == null){
		callback("Error!",null);
	}
	userInfoModel.push(userInfo);
	///append data to file
	fs.writeFile('./app/models/userInfo.json', JSON.stringify(userInfoModel),'utf-8', (err) => {
	// fs.appendFile('./app/models/userInfo.json', JSON.stringify(userInfo),'utf-8', (err) => {
  	if (err) throw err;
  		callback(null, "success add user");
	});

}

//find user by id
function findUserById(id, callback){
	let result = null;
 //    _.forEach(foodItemModel, (item) => {
 //        if (_.isEqual(name, item.name)) {
 //            result = item;
 //        }
 //    })
 //    callback(null, result);
	_.forEach(userInfoModel,(item)=>{
		if(_.isEqual(id, item.userId)){
			result = item;
			
		}
	});
	callback(null, result);
}