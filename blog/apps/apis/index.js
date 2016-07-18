var express = require("express");
var router = express.Router();


router.use("/api/admin", require(__dirname + "/admin.js"));
router.use("/api/blog", require(__dirname + "/blog.js"));

module.exports = router;