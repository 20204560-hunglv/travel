require("dotenv/config");

module.exports = {
  username: process.env.MAIL_USERNAME,
  password: process.env.MAIL_PASSWORD,
  host: process.env.MAIL_HOST,
};
