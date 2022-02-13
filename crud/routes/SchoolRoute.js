const { SchoolController } = require("../controllers");
const route = require("express").Router();

route.get("/", SchoolController.getAllSchool);
route.get("/:id", SchoolController.getSchoolById);
route.post("/", SchoolController.createSchool);
route.put("/:id", SchoolController.updateSchool);
route.delete("/:id", SchoolController.deleteSchool);

module.exports = route;
