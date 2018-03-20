var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");

var applicationSchema = mongoose.Schema({
  name: String
});
var ApplicationModel = mongoose.model("Application", applicationSchema);

router.get("/", function(req, res, next) {
  ApplicationModel.find(function(err, applications) {
    if (err) return console.error(err);
    res.json(applications);
  });
});

router.get("/:applicationId", function(req, res, next) {
  var id = req.params.applicationId;
  ApplicationModel.findById(id, function(err, application) {
    if (err) return console.error(err);
    res.json(application);
  });
});

router.post("/", function(req, res, next) {
  var name = req.body.name;
  var application = new ApplicationModel({ name: name });
  application.save(function(err, application) {
    if (err) return console.error(err);
    res.json(`Added to db: ${application.name}`);
  });
});

router.put("/:applicationId", function(req, res, next) {
  var id = req.params.applicationId;
  ApplicationModel.findById(id, function(err, application) {
    if (err) return console.error(err);
    application.name = req.body.name;
    application.save(function(err, updatedApplication) {
      if (err) return console.error(err);
      res.send(updatedApplication);
    });
  });
});

router.delete("/:applicationId", function(req, res, next) {
  var id = req.params.applicationId;
  ApplicationModel.findByIdAndRemove(id, function(err) {
    if (err) return console.error(err);
    res.send();
  });
});

module.exports = router;
