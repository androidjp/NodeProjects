const _ = require('lodash');
const uuid = require('uuid/v4');
const userInfoFacade = require('../../app/facade/userInfo.server.facade.js');
module.exports = {
    addUserInfo: addUserInfo,
    findUserById: findUserById
}

function addUserInfo(req, res, next) {
    let body = req.body;
    body.userInfoId = uuid();
    if (_.isEmpty(body)) {
        return next(new Error('producer name is empty'));
    } else {
        userInfoFacade.addUserInfo(body, (error, result) => {
            if (error) {
                return next(new Error(error));
            } else {
                return res.json(result);
            }
        });
    }
}


function findUserById(req, res, next) {
    let params = req.params;
    let id = params.id;
    if (_.isEmpty(id)) {
        return next(new Error('no id!'));
    } else {
        userInfoFacade.findUserById(id, (error, result) => {
            if (error) {
                return next(new Error(error));
            } else {
                return res.json(result);
            }
        });
    }
}