// ID is what is used inside SQL database

// User name and password are for authentication

var Sequelize = require("sequelize");
var bcrypt = require("bcrypt");

// Databasename needs to be updated to the databass
const sequelize = new Sequelize("databasename", "root", "password", {
  host: "localhost",
  port: 3000,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  operatorsAliases: false,
});

// set up User table
var User = sequelize.define("users", {
  id: {
    type: Sequelize.INTEGER,
    unique: true,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

//hash password with bcrypt
User.beforeCreate((user, options) => {
  const salt = bcrypt.genSaltSync();
  user.password = bcrypt.hashSync(user.password, salt);
});

//validate password
User.prototype.validPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

// create all defined tables in the specificied database
sequelize
  .sync()
  .then(() => console.log("user tables has been successfully created"))
  .catch((error) => console.log("this error occured", error));

// export user module
module.exports = User;
