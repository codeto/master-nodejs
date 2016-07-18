var express = require("express");
var router = express.Router();

// locahost:3000/api/blog/
router.get("/", function(req, res){
    res.json({"message": "this is Blog API Page"});
});

module.exports = router;