const { studentModel } = require("../models");

class StudentController {
  static async getAllStudent(req, res) {
    const schools = await studentModel.getAllStudent();
    res.status(200).json({
      message: "Successfully fetched all student",
      schools,
    });
  }

  static async getStudentById(req, res) {
    const { id } = req.params;
    const school = await studentModel.getStudent(id);
    res.status(200).json({
      message: "Successfully fetched student",
      school,
    });
  }

  static async createStudent(req, res) {
    const { name, email, phone, school_id } = req.body;
    const payload = { name, email, phone, school_id };
    const newSchool = await studentModel.createStudent(payload);
    res.status(201).json({
      message: "Successfully created a new student",
      newSchool,
    });
  }

  static async updateStudent(req, res) {
    const { id } = req.params;
    let payload = {};
    for (let key in req.body) {
      payload[key] = req.body[key];
    }
    const updatedSchool = await studentModel.updateStudent(payload, id);
    res.status(200).json({
      message: "Successfully updated student",
      updatedSchool,
    });
  }
  static async deleteStudent(req, res) {
    const { id } = req.params;
    await studentModel.deleteStudent(id);
    res.status(200).json({ message: "Successfully deleted student" });
  }
}

module.exports = StudentController;
