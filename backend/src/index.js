const express = require("express");
const morgan = require("morgan");
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

//connect MongoDB
database.connect();

route(app);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
