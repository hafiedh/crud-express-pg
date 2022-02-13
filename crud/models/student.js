const pool = require("../config");

class Schools {
  static getAllStudent = async () => {
    const query = `
    SELECT * FROM students s ;
    `;

    const student = await pool.query(query);
    console.log(student);
    return student.rows;
  };

  static getStudent = async (id) => {
    const query = `SELECT * FROM students s WHERE s.id  = ${id};`;
    const student = await pool.query(query);
    console.log(student);
    return student.rows[0];
  };

  static createStudent = async (payload) => {
    const query = `INSERT INTO students
    (name,email,phone,school_id)
    VALUES($1, $2, $3, $4)
    RETURNING *;
    `;
    const student = await pool.query(query, [
      payload.name,
      payload.email,
      payload.phone,
      payload.school_id,
    ]);
    console.log(student);
    return student.rows[0];
  };

  static deleteStudent = async (id) => {
    const query = `
    DELETE FROM students
    WHERE id=${id}
    RETURNING *;
    `;
    const deleted = await pool.query(query);
    return deleted.rows[0];
  };

  static updateStudent = async (payload, id) => {
    let query = `
    UPDATE students SET
    `;
    const arr = Object.keys(payload);
    for (let i = 0; i < arr.length; i++) {
      if (i === arr.length - 1) {
        query += `${arr[i]}= '${payload[arr[i]]}'`;
      } else {
        query += `${arr[i]}= '${payload[arr[i]]}',`;
      }
    }
    query += `WHERE id=${id} RETURNING * ;`;
    console.log(query);
    const updated = await pool.query(query);
    return updated.rows[0];
  };
}

module.exports = Schools;
