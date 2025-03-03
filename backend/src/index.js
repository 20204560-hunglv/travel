const express = require("express");
const morgan = require("morgan");
const path = require("path");
const routes = require("./handlers/routes")
const app = express();
const database = require("./config/database");
const cors = require('cors');

// Cấu hình CORS chi tiết
app.use(cors({
  origin: [
    'http://localhost:3000',  // Development
    'https://travel-frontend-nine.vercel.app', // Thay bằng domain Vercel của bạn
    /\.vercel\.app$/ // Cho phép tất cả subdomain của vercel.app
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept'],
  credentials: true,
  maxAge: 86400 // 24 hours
}));

app.use(morgan("combined"));
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

//connect MongoDB
database.connect();

routes(app);

const port = process.env.PORT || 3003;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
