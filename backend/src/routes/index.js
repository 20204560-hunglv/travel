const apiRouter = require("./api.js");

const route = (app) => {
  app.use("/api/v1", apiRouter);
};
module.exports = route;
