const { instructor } = require("../config/index");

class Instructor {
  static getInstructor() {
    return instructor;
  }

  static getInstructorById(id) {
    return instructor[id];
  }
}

module.exports = Instructor;
