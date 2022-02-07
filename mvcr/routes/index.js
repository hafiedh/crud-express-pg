const route = require("express").Router();
const pesertaRoutes = require("./peserta");
const instructorRoutes = require("./instructor");

route.use("/peserta", pesertaRoutes);
route.use("/instructor", instructorRoutes);

route.get("/", (req, res) => {
  res.render("index");
});

// route.use((err, req, res, next) => {
//   // render the error page
//   res.status(err.status || 500);
//   res.render("error", { status: err.status, message: err.message });
// });

module.exports = route;
