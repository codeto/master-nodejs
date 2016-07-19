var express = require("express");
var router = express.Router();

//localhost:3000/admin/
router.get("/", function(req, res) {
	console.log(req.url);
	res.json({"message" : "This is Admin Default Page"});
});

//localhost:3000/admin/dashboard
router.get("/dashboard/", function(req, res) {
	console.log(req.url);
	res.json({"message" : "This is Dashboard Page"});
});

module.exports = router;