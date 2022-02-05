const { instructorModel } = require("../model");

class InstructorController {
  static getInstructor(req, res) {
    const result = instructorModel.getInstructor();
    res.status(200).json(result);
    return;
  }

  static getInstructorById(req, res) {
    const { id } = req.params;
    const result = instructorModel.getInstructorById(id);
    res.status(200).json(result);
    return;
  }

  static viewInstructor(req, res) {
    res.render("instructor");
  }
}

module.exports = InstructorController;
