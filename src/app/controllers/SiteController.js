const Course = require("../models/Course");
const { multipleMongooseToObject } = require("../../ultil/mongoose");

class SiteController {
  index(req, res, next) {
    Course.find({})
      .then((courses) => {
        res.render("home", {
          courses: multipleMongooseToObject(courses),
        });
      })
      .catch((err) => next(error));
  }
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
