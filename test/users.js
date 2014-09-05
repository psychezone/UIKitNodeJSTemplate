var assert = require('assert');
var request = require('request');

/*
describe('Array', function(){
  describe('#indexOf()', function(){
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    });
  });
});
*/

describe('app', function(){
  describe('POST /users', function(){
	
    it('respond with a new user', function(done){

    	var options = {
	    	firstname : "John",
	    	lastname: "Doe",
	    	email: "johndoe@domain.com"
		};

		request.post('http://localhost:3000/users', {form:options}, function(error, response, body) {
	   		if(!error && response.statusCode === 200){
	   			console.log("body " + body);
	   			console.log("response " + response);
	   			
	   		}else{
	   			console.log("error " + error);
	   		}
	   		done();
		});
    });

  });
});s