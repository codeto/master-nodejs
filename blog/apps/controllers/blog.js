var express = require('express');

var router = express.Router();


// localhost:3000/blog/
router.get('/',function(req,res){
	res.json({'message':'This is Blog page'});
});

module.exports = router;