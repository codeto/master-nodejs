<<<<<<< HEAD
//Controller cho blog
var express = require("express");
var router = express.Router();

//localhost:3000/admin/
router.use("/", function(req, res) {
	res.json({"message" : "This is API Blog Page"});
=======
var express = require("express");
var router = express.Router();

// locahost:3000/api/blog/
router.get("/", function(req, res){
    res.json({"message": "this is Blog API Page"});
>>>>>>> 9599d917df492da9c7282e82abe5bfa60b773e3b
});

module.exports = router;