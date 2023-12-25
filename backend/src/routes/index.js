const searchRouter = require("./search.js");
const apiRouter = require("./api.js")

const route = (app) => {
  app.use("/search", searchRouter);
  app.use("/api/v1", apiRouter);
  app.get("/", (req, res) => {
    res.render("home");
  });
  app.post("/search", (req, res) => {
    console.log(req.body["user-name"]);
    res.send("");
  });
};
module.exports = route;
