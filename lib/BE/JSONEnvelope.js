/**
JSON envelope API response
*/
var JSONEnvelope = function(){

	if (!this instanceof JSONEnvelope){
		return new JSONEnvelope();
	}    
	
	this.status = { 
		"response_code": 200,
		"message": "Success",
		"errors": "",
		"error_code": 0
	},
	this.response = { 
  		"pagination": {}, //{"count": 0, "pages": 0}
  		"data": {} 
  	};
  	
	return this;
}

exports.JSONEnvelope = JSONEnvelope;