const { StudentController } = require("../controllers");
const route = require("express").Router();

route.get("/", StudentController.getAllStudent);
route.get("/:id", StudentController.getStudentById);
route.post("/", StudentController.createStudent);
route.put("/:id", StudentController.updateStudent);
route.delete("/:id", StudentController.deleteStudent);

module.exports = route;
