const route = require("express").Router();
const { InstructorController } = require("../controller");

route.get("/", InstructorController.getInstructor);
route.get("/:id", InstructorController.getInstructorById);
route.get("/views", InstructorController.viewInstructor);

module.exports = route;
