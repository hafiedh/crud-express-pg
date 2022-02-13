const { schoolModel } = require("../models");

class SchoolController {
  static async getAllSchool(req, res) {
    const schools = await schoolModel.getAllSchool();
    res.status(200).json({
      message: "Successfully fetched all schools",
      schools,
    });
  }

  static async getSchoolById(req, res) {
    const { id } = req.params;
    const school = await schoolModel.getSchool(id);
    res.status(200).json({
      message: "Successfully fetched school",
      school,
    });
  }

  static async createSchool(req, res) {
    const { name, domisili, email, akreditasi } = req.body;
    const payload = { name, domisili, email, akreditasi };
    const newSchool = await schoolModel.createSchool(payload);
    res.status(201).json({
      message: "Successfully created a new school",
      newSchool,
    });
  }

  static async updateSchool(req, res) {
    const { id } = req.params;
    let payload = {};
    for (let key in req.body) {
      payload[key] = req.body[key];
    }
    const updatedSchool = await schoolModel.updateSchool(payload, id);
    res.status(200).json({
      message: "Successfully updated school",
      updatedSchool,
    });
  }

  static async deleteSchool(req, res) {
    const { id } = req.params;
    await schoolModel.deleteSchool(id);
    res.status(200).json({
      message: "Successfully deleted a school",
    });
  }
}

module.exports = SchoolController;
