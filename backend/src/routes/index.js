const searchRouter = require("./search.js");

const route = (app) => {
  app.use("/search", searchRouter);
  app.get("/", (req, res) => {
    res.render("home");
  });
  app.post("/search", (req, res) => {
    console.log(req.body["user-name"]);
    res.send("");
  });
};
module.exports = route;
