var express = require('express');
var router = express.Router();
var JSONEnvelope = require('../lib/BE/JSONEnvelope.js').JSONEnvelope;

var saveToDB = process.env.USE_DB;
if(saveToDB == 1){
	var UsersDAL = require('../lib/DAL/UsersDAL.js').UsersDAL;
	var oUsersDAL = new UsersDAL();
}

router.get('/new', function(req, res){
	res.render('users', { title: 'Signup' });
});

/**
creates a new user, returns back the user
*/
router.post('/', function(req, res){

	var oEnvelope = new JSONEnvelope();

	//validation before saving
	req.assert('firstname', 'First name is required').notEmpty();
	req.assert('firstname', 'First name must be at least 2 characters').isLength(2);
	req.assert('lastname', 'Last name is required').notEmpty();
	req.assert('lastname', 'Last name must be at least 2 characters').isLength(2);
	req.assert('email', 'Email is required').notEmpty();
	req.assert('email', 'Valid email required').isEmail();
	req.assert('password', 'Password is required').notEmpty();
	req.assert('password', 'Password must be at least 8 characters').isLength(8);
	req.assert('password', 'Password must be alphanumeric only').isAlphanumeric();
	req.assert('terms', 'Terms must be accepted').notEmpty();
	var validationErrors = req.validationErrors();

	if(validationErrors){
	    oEnvelope.status.response_code = 409;
	    oEnvelope.status.message = validationErrors;
	    res.json(oEnvelope);
	}else{
		var oUser = {
			firstname: req.body.firstname,
			lastname: req.body.lastname,
			email: req.body.email,
			password: req.body.password
		};
		
		if(saveToDB == 1){
			//save to db here
			oUsersDAL.save(oUser, function(error, user){						
				if(error){			
		    		oEnvelope.status.response_code = 500;
					oEnvelope.status.message = "Error adding user";
					oEnvelope.status.errors = error.toString();
					oEnvelope.status.error_code = error.code;
					console.log(oEnvelope);					
				}else{
					oEnvelope.response.data = {"user": user};
				}
				res.json(oEnvelope);
			});	
		}else{
			res.json(oEnvelope);
		}
	}
});

module.exports = router;
