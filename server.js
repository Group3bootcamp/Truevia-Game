var cookieParser = require("cookie-parser");
var session = require("express-session");
var morgan = require("morgan");
//model to insert user data into SQL using sequelize
var user = require("./models/user");
var hbs = require("express-handlebars");
var bodyParser = require("body-parser");
var express = require("express");
var path = require("path");
const { O_NOATIME } = require("constants");
const SMTPPool = require("nodemailer/lib/smtp-pool");
const sequelize = require("sequelize");
const User = require("./models/users");

var app = express();
app.set("port", 9000);
app.use(morgan("dev"));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cookieParser);
app.use(
  session({
    key: "user_sid",
    secret: "somesecret",
    resave: false,
    cookie: {
      expires: 60000,
    },
  })
);

//use handlebars

app.engine(
  "hbs",
  hbs({
    extname: "hbs",
    defaultLayout: "layout",
    //this is the view for the login page
    layoutsDir: __dirname + "/view/layout",
  })
);
app.set("view engine", "hbs");

// if they have cookie data and no current session data, clear cookie data
app.use((req, res, next) => {
  if (req.cookies.user_sid && !req.session.user) {
    res.clearCookie("user_sid");
  }
  next();
});

var hbsContent = {
  usersName: "",
  logginin: false,
  title: "Current logged out",
  body: "Body content",
};

//middleware function to redirect logged-in users
var sessionChecker = (req, res, next) => {
  if (req.session.user && req.cookies.user_sid) {
    // if they have session data and their cookies match redirect them to quiz menu
    res.redirect("/quizMenu");
  } else {
    next();
  }
};

// route for home-page to login page
app.get("/", sessionChecker, (req, res) => {
  res.redirect("/login");
});

// route for signup page
app
  .route("/signup")
  .get((req, res) => {
    res.render("signup", hbsContent);
  })
  .post((req, res) => {
    User.create({
      username: req.body.username,
      password: req.body.password,
    })
      .then((user) => {
        req.session.user = user.dataValues;
        res.redirect("/dashboard");
      })
      //if there is error then redirect them to signup page
      .catch((error) => {
        res.redirect("/signup");
      });
  });

//check to see if this is a valid login by query the database and see if they exist
app
  .route("/login")
  .get((req, res) => {
    res.render("login", hbsContent);
  })
  .post((req, res) => {
    User.create({
      username: req.body.username,
      password: req.body.password,
    })
      .then((user) => {
        req.session.user = user.dataValues;
        res.redirect("/dashboard");
      })
      //if there is error then redirect them to signup page
      .catch((error) => {
        res.redirect("/signup");
      });
  });
