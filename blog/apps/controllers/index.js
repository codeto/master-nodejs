//File nay khong lam gi ca, ma chi co chuc nang require nhung thanh phan khac
var express = require("express");
var router = express.Router();
router.use("/admin", require(__dirname+"/admin.js"));
router.use("/blog", require(__dirname+"/blog.js"));
//localhost:3000/
router.get("/", function(req, res) {
	// res.json({"message" : "This is Home Page"});
	res.render("test", {name: "Simon Ha"});// Tim trong thu muc goc
	// res.render("admin/test");
});

module.exports = router;