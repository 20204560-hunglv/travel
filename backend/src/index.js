const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const path = require("path");
const route = require("./routes");
const app = express();
const port = 3003;
const database = require("./config");
const cors = require('cors');

app.use(morgan("combined"));
app.use(cors());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.engine("handlebars", handlebars());
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "./resources/views"));
//connect MongoDB
database.connect();

route(app);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
