var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
  res.send("All applications");
});

router.get("/:applicationId", function(req, res, next) {
  res.send(req.params);
});

router.post("/", function(req, res, next) {
  res.send("Add application");
});

router.put("/", function(req, res, next) {
  res.send("Update application");
});

router.delete("/", function(req, res, next) {
  res.send("Delete application");
});

module.exports = router;
