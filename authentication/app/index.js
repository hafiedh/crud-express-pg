const express = require("express");
const { query } = require("./db");
// ---
const passport = require("passport");
const LocalStrategy = require("passport-local");
// ---
const session = require("express-session");
const path = require("path");
const bcrypt = require("bcrypt");
const port = 8000;

const {
  rootRequest,
  login,
  adminPage,
  studentPage,
  registerPage,
  register,
  deleteUser,
} = require("./controllers");

// Menangkap promise error pada express, jika tidak menggunakan ini
// tiap error promise yang terjadi akan memberhentikan semua request
require("express-async-errors");

// Inisiasi express
const app = express();

app.use(
  session({
    secret: "yang=penting=aman",
  })
);

// agar express bisa membaca json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// passport local strategy
passport.use(
  new LocalStrategy(async function (username, password, done) {
    console.log(username, password);
    const getUser = await query(
      `select * from users where email = '${username}'`
    );
    const user = getUser.rows[0];
    if (!user)
      return done(null, false, { message: "Password and username invalid!" });
    if (!(await bcrypt.compare(password, user.password))) {
      return done(null, false, { message: "Password and username invalid!" });
    }
    return done(null, user);
  })
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

// inisiasi penggunaan passport
app.use(passport.initialize());
app.use(
  passport.session({
    secret: "yang=penting=aman",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60 * 60 * 1000 }, // 1 hour
  })
);

// menggunakan template engine, dengan tipe ejs
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.engine("ejs", require("ejs").__express);

// router
app.get("/", (req, res) => rootRequest(req, res));
app.post(
  "/login",
  passport.authenticate("local", { failureRedirect: "/" }),
  (req, res) => login(req, res)
);

app.get("/admin", (req, res) => adminPage(req, res));
app.get("/student", (req, res) => studentPage(req, res));
app.post("/register", (req, res) => register(req, res));
app.get("/register", (req, res) => registerPage(req, res));
app.get("/admin/:id/delete", (req, res) => deleteUser(req, res));

app.listen(port, () => {
  console.info(`Aplikasi berjalan di port, http://localhost:${port}`);
});
