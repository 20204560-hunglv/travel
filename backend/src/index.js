const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const path = require("path");
const route = require('./routes')
const app = express();
const port = 3000;

app.use(morgan("combined"));

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.engine("handlebars", handlebars());
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "./resources/views"));

route(app);
// app.get("/", (req, res) => {
//   res.render("home");
// });
// app.get("/search", (req, res) => {
//   res.render("search");
// });
// app.post("/search", (req, res) => {
//   console.log(req.body["user-name"]);
//   res.send("");
// });

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
