<<<<<<< HEAD
//File nay khong lam gi ca, ma chi co chuc nang require nhung thanh phan khac
var express = require("express");
var router = express.Router();
router.use("/admin", require(__dirname+"/admin.js"));
router.use("/blog", require(__dirname+"/blog.js"));
//localhost:3000/
router.get("/", function(req, res) {
	console.log(req.url);
	// res.json({"message" : "This is Home Page"});
	res.render("test", {name: "Simon Ha"});// Tim trong thu muc goc
	// res.render("admin/test");
});

// about page 
router.get('/pages/about/', function(req, res) {
    res.render("pages/about");
=======
var express = require("express");
var router = express.Router();


router.use("/admin", require(__dirname + "/admin.js"));
router.use("/blog", require(__dirname + "/blog.js"));


router.get("/", function(req, res){
    // res.json({"message": "This is Home Page"});
    res.render("test", {name: "Cuong Ba"});
>>>>>>> 9599d917df492da9c7282e82abe5bfa60b773e3b
});

module.exports = router;