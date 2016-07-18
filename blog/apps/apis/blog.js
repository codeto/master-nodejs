var express = require('express');

var router = express.Router();


// localhost:3000/api/blog/
router.get('/',function(req,res){
	res.json({'message':'This is Blog API page'});
});

module.exports = router;