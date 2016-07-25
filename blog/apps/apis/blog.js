//Controller cho blog
var express = require("express");
var router = express.Router();

//localhost:3000/admin/
router.use("/", function(req, res) {
	res.json({"message" : "This is API Blog Page"});
});
module.exports = router;