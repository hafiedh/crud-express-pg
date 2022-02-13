const pool = require("../config");

class Schools {
  static getAllSchool = async () => {
    const query = `
    SELECT * FROM schools s ;
    `;

    const schools = await pool.query(query);
    console.log(schools);
    return schools.rows;
  };

  static getSchool = async (id) => {
    const query = `SELECT * FROM schools s WHERE s.id  = ${id};`;
    const school = await pool.query(query);
    console.log(school);
    return school.rows[0];
  };

  static createSchool = async (payload) => {
    const query = `INSERT INTO schools
    (name, domisili, email, akreditasi)
    VALUES($1, $2, $3, $4)
    RETURNING *;
    `;
    const student = await pool.query(query, [
      payload.name,
      payload.domisili,
      payload.email,
      payload.akreditasi,
    ]);
    console.log(student);
    return student.rows[0];
  };

  static deleteSchool = async (id) => {
    const query = `
    DELETE FROM schools
    WHERE id=${id}
    RETURNING *;
    `;
    const deleted = await pool.query(query);
    return deleted.rows[0];
  };

  static updateSchool = async (payload, id) => {
    let query = `
    UPDATE schools SET
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
