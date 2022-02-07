const express = require("express");
const app = express();
const PORT = 7777;
const routes = require("./routes");

app.set("view engine", "ejs");
app.use(express.static("views"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
