var express = require("express");
var router = express.Router();

<<<<<<< HEAD
//localhost:3000/admin/
router.use("/", function(req, res) {
	res.json({"message" : "This is API Admin Page"});
=======
// locahost:3000/api/admin/
router.get("/", function(req, res){
    res.json({"message": "this is Admin API Page"});
>>>>>>> 9599d917df492da9c7282e82abe5bfa60b773e3b
});

module.exports = router;