var express = require('express');
var request = require('request');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('search', { title: 'Search' })
});

router.post('/', function(req, res){
	var options = {
    	url: 'http://www.reddit.com/search.json?limit=10&q=' + encodeURIComponent(req.body.search)
	};

	request(options, function(error, response, body) {
   		if(!error && response.statusCode === 200){
   			var jsonObj = JSON.parse(body);
   			//console.log("json " + req.body.search + " " + jsonObj);
   			//console.log("sub " + jsonObj.data.children[0].data.title);
   			res.json(jsonObj.data.children);
   		}else{
        console.log("search error " + error);
   			res.json([]);
   		}
	});

	
});

module.exports = router;