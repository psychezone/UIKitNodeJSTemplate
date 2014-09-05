/**
users db ops
*/

var DBConnection = require('./DBConnection.js').DBConnection;
var UsersDAL = function(){};

/**
saves to users 
*/
UsersDAL.prototype.save = function(pUser, pCallback){
	DBConnection.query('INSERT INTO users SET ?', pUser, 
        function(err, user) {
            pCallback(err, user);
        }
    );
};


exports.UsersDAL = UsersDAL;
