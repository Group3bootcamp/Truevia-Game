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

// if they have cookie data and are already a user login
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

  // Route for login page
app
.route("/login")
.get((req, res) => {
  res.render("login", hbsContent);
})
.post((req, res) => {
  var username = req.body.username,
  var password = req.body.password;

  User.findOne({where: {username: username}}).then(function(user){
      if (!user) {
          res.redirect("/login");
      } else if (!user.validPassword(password)){
          res.redirect("/login");
      } else {
          req.session.user = user.dataValues;
        res.redirect("/quizMenu")
    }
  })
});

//Route to go to quiz menu page
app.get("/quizMenu", (req, res) => {
    if (req.session.user && req.cookies.user_sid) {
        hbsContent.logginin = true;
        hbsContent.usersName = req.session.user.username;
        hbsContent.title= "You are loggin in";
        res.render("index", hbsContent);
    } else {
        res.redirect("/login");
    }
})

// Route to logout 
app.get("/logout", (req, res) =>{
    if (req.session.user && req.cookies.user_sid) {
        hbsContent.logginin = false;
        hbsContent.title = "You are logged out!";
        res.clearCookie("user_sid");
        res.redirect("/")
    } else {
        res.redirect("/login");
    }
});

// route for handling errors

app.use(function(req, res, next){
    res.status(404).send("That page is unavailable")
});

app.listen(app.get(`port`), () => console.log(`App started on port ${app.get(`port`)}`));




