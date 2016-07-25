var express = require("express");
var router = express.Router();

<<<<<<< HEAD
router.use("/api/admin", require(__dirname+"/admin.js"));
router.use("/api/blog", require(__dirname+"/blog.js"));
=======

router.use("/api/admin", require(__dirname + "/admin.js"));
router.use("/api/blog", require(__dirname + "/blog.js"));
>>>>>>> 9599d917df492da9c7282e82abe5bfa60b773e3b

module.exports = router;