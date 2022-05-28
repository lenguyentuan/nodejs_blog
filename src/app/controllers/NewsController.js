class NewsController {
  index(req, res) {
    res.render("news");
  }
  show(req, res) {
    res.send(req.query.id);
  }
}

module.exports = new NewsController();
