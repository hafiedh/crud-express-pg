const route = require("express").Router();
const pesertaRoutes = require("./peserta");
const instructorRoutes = require("./instructor");

route.use("/peserta", pesertaRoutes);
route.use("/instructor", instructorRoutes);

route.get("/", (req, res) => {
  res.render("index");
});

module.exports = route;
