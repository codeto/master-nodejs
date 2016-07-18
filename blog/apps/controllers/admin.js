var express = require('express');

var router = express.Router();


// localhost:3000/admin/
router.get('/',function(req,res){
	res.json({'message':'This is Admin page'});
});

module.exports = router;