const route = require("express").Router();
const { InstructorController } = require("../controller");

route.get("/", InstructorController.getInstructor);
route.post("/redirect", InstructorController.redirect);
route.get("/:id", InstructorController.getInstructorById);

module.exports = route;
