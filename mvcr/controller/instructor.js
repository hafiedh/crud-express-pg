const { instructorModel } = require("../model");

class InstructorController {
  static getInstructor(req, res) {
    const result = instructorModel.getInstructor();
    res.render("instructor", { data: result });
    return;
  }

  static getInstructorById(req, res) {
    const { id } = req.params;
    const result = instructorModel.getInstructorById(id);
    res.status(200).json(result);
    return;
  }

  static redirect(req, res) {
    res.redirect("/peserta");
    return;
  }
}

module.exports = InstructorController;
