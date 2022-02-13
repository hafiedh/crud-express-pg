const SchoolRoute = require("../routes/SchoolRoute");
const StudentRoute = require("../routes/StudentRoute");
const route = require("express").Router();

route.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to the CRUD API",
  });
});

route.use("/school", SchoolRoute);
route.use("/student", StudentRoute);

module.exports = route;
