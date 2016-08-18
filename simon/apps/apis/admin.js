var express = require("express");
var router = express.Router();

// locahost:3000/api/admin/
router.get("/", function(req, res){
    res.json({"message": "this is Admin API Page"});
});

module.exports = router;