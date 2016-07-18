var express = require("express");
var router = express.Router();

// locahost:3000/admin/
router.get("/", function(req, res){
    res.json({"message": "this is Admin Page"});
});

module.exports = router;