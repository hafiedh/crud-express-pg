const { query } = require("../db");
const bcrypt = require("bcrypt");

function rootRequest(_req, res) {
  res.render("login.ejs");
}

async function login(req, res) {
  const user = req.user;
  if (user.role === "admin") {
    return res.redirect("/admin");
  } else {
    return res.redirect("/student");
  }
}

async function adminPage(req, res) {
  if (req.user.role === "admin") {
    const queryResult = await query(
      `select * from users where role = 'student' order by id desc`
    );
    const users = queryResult.rows;
    console.log(users);
    res.render("admin.ejs", { data: users });
  } else {
    res.render("limited_access.ejs");
  }
}

function studentPage(req, res) {
  if (req.user.role === "student") {
    res.render("student.ejs");
  } else {
    res.render("login.ejs");
  }
}

function registerPage(req, res) {
  res.render("register.ejs");
}

async function register(req, res) {
  const { email, password, role } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);
  const result = await query(
    `insert into users(email, password, role) values('${email}', '${hashedPassword}', '${role}') returning *`
  );
  if (result.rowCount === 1) {
    return res.render("login.ejs");
  } else {
    return res.redirect("/register");
  }
}

async function deleteUser(req, res) {
  const { id } = req.params;
  const result = await query(`delete from users where id = ${id}`);
  if (result.rowCount === 1) {
    return res.redirect("/admin");
  } else {
    return res.redirect("/admin");
  }
}

module.exports = {
  rootRequest,
  login,
  adminPage,
  studentPage,
  register,
  registerPage,
  deleteUser,
};
