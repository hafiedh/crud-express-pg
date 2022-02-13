const pool = require("../config");

const migrations = async () => {
  const query_create_schools = `create table IF NOT EXISTS Schools (
    id serial primary key,
    name varchar(255) not null ,
    domisili varchar(255) not null ,
    email varchar(100) ,
    akreditasi varchar(2)
  );`;

  const query_create_students = `
  create table IF NOT EXISTS Students (
    id serial primary key, 
    name varchar(255) not null,
    email varchar(100),
    phone varchar(20),
    school_id int not null,
    constraint fk_student_for_schools foreign key(school_id) references Schools(id) 
  );`;

  try {
    await pool.query(query_create_schools);
    await pool.query(query_create_students);
  } catch (error) {
    console.log(error);
  }
};

migrations();
